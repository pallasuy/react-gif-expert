import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react'


describe('´Pruebas en el hook useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        const category = 'Europa';
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Debe retornar un arreglo de imagenes y isLoading en false', async () => {
        const category = 'Europa';
        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)//Aca le estamos diciendo que espere hasta que el resultado sea images.lengt > 0 

        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });


})