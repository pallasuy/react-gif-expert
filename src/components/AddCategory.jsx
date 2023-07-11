import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategorie }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  }


  const onSubmit = (event) => {

    event.preventDefault();
    const inputValueT = inputValue.trim();
    if (inputValueT.length < 1) return;//Si la cadena esta vacia no continuo

    // setCategories(categories => [inputValue , ...categories]);//Recibo en el callback las categorias actuales y copio el arreglo luego de la neuva categoria para no perder los datos.
    onNewCategorie(inputValueT);
    setInputValue('');
  }

  return (
    <form onSubmit={event => onSubmit(event)} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
    //Si tenes un callback que recibe un argumento y se lo pasa a una funcion podemos resumirlo como : 

    /*  <form onSubmit={onSubmit}>
     <input
       type="text"
       placeholder="Buscar Gifs"
       value={inputValue}
       onChange={(event) => onInputChange(event)}
     />
   </form> */

  );
}

AddCategory.propTypes = {
  onNewCategorie: PropTypes.func.isRequired,
}

