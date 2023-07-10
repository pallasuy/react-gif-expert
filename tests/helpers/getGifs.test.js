import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
    test('Debe de retornar un arreglo de gis', async () => {
        const gifs = await getGifs('Europa');
        //console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);//Pregunto que el arreglo tenga al menos un elemento
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            }
        )


    })

})