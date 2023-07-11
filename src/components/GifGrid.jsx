import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from "prop-types";

export const GifGrid = ({ category }) => {

    /*UseEffect recibe 2 argumentos primero el effecto que es un callback y luego lasendencias, si se deja vacio el segundo
    parametro, se ejecutara solo en el constructor de nuestro componente */

    /*  const [images, setImages] = useState([]);
 
     const getImages = async () => {
         const newImages = await getGifs(category);
         setImages(newImages);
     }
 
     useEffect(() => {
         getImages();
     }, []);
  */

    const { isLoading, images } = useFetchGifs(category);



    return (
        <>
            <h3> {category} </h3>

            {
                isLoading && <h2>Cargando...</h2>

            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} //Exparcir las porpiedades es decir envio todas al componente

                        />
                    ))
                }

            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,

}
