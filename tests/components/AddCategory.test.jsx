import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {

    const category = 'Europa';
    test('Debe cambiar el valor de la caja de texto', () => {
        //Sujeto de prueba


        render(<AddCategory onNewCategorie={() => { }} />);
        const input = screen.getByRole('textbox');
        //Disparamos el evento onChange

        fireEvent.input(input, { target: { value: category } });
        //Evaluamos
        expect(input.value).toBe(category);
        //screen.debug();

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();//Esto es un mock 

        render(<AddCategory onNewCategorie={onNewCategory} />);


        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');//Debemos agregar aria-label en el functional component para que lo encuentre 

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();//Pregunto si la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1);//Pregunto cuantas veces fue llamada la funcion 
        expect(onNewCategory).toHaveBeenCalledWith(category);


        // screen.debug();

    });

    test('No llamar al onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();//Esto es un mock 

        render(<AddCategory onNewCategorie={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');//Debemos agregar aria-label en el functional component para que lo encuentre
        const vacio = '';
        fireEvent.input(input, { target: { value: vacio } });
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });



})