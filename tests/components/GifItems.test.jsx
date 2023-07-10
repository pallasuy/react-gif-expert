/* import {render,screen} from "@testing-library/react";
import { GifItem } from "../src/components/GifItem";

render(<GifItem/>);
screen.debug(); */

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en <GifItem/>', () => {

    const title = 'Esto es un titulo';
    const url = 'http://www.google.com/';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });


    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />) //Primero agarramos nuestro objeto de prueba
        //screen.debug(); //Esto para visaulizar nuestro objeto de prueba.
        expect(screen.getByRole('img').src).toBe(url);//Evaluamos propiedad de un elemento. 
        expect(screen.getByRole('img').alt).toBe(title);

    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />) //Primero agarramos nuestro objeto de prueba
        expect(screen.getByText(title)).toBeTruthy();

    })

});