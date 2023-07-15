
import { useState } from "react";
import { AddCategory, GifGrid } from './components';

//const key = 'R0jI2dqMr1IipDfxxjLWIURqd5SquMDe';

const inicio = ['Cocina'];

export const GifExpertApp = () => {

    //const [categories, setcategories] = useState(['Categoria 1', 'Categoria 2']); //Siempre es recomendable indicar un valor inicial para que no quede undefined
    const [categories, setCategories] = useState(inicio); //Siempre es recomendable indicar un valor inicial para que no quede undefined

    const onAddCategory = (newCategoryName) => {
        //console.log(newCategoryName);

        if (categories.includes(newCategoryName)) return;

        setCategories([newCategoryName, ...categories]);


    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategorie={(newValue) => onAddCategory(newValue)}
            />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }


        </>
    );

};

