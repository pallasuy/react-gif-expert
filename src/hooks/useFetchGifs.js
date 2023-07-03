import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);


    const ret = {
        images, //Cuando tenemos una propiedade que hace referencia a una variable del mismo nombre podemos dejarlo asi. Otra forma esria images:images
        isLoading// isLoading:isLoading

    }

    return ret;

}
