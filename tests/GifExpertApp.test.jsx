import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba en <GifExpertApp />', () => {

    test('Probemos que haga match con el snapShot', () => {
        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
        screen.debug();

    });

    test('Evaluar categorias ', () => {
        const { container } = render(<GifExpertApp />);
        const inputAux = screen.getByRole('textbox');
        fireEvent.input(inputAux, { target: { value: 'Europa' } });

        screen.debug();


    })


})