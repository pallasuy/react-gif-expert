import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');//Le indicamos que haga un mock completo de este path

describe('Pruebas sobre GifGrid', () => {

    const category = 'Europa';
    test('Debe de mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
            images: [], isLoading: true
        });

        render(<GifGrid category={category} />);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Europa',
            url: 'http://www.google.com/europa'
        },
        {
            id: '123',
            title: 'Asia',
            url: 'http://www.google.com/asia'
        },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs, isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

    })



})
