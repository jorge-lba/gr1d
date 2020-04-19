const request = require( 'supertest' )
const app = require( '../../src/app.js' )

jest.setTimeout( 40000 )

describe( "API_DESTINOS", () => {

    it( "Deve consultar destinos disponiveis", async () => {

        const response = await request( app )
            .get( '/api/destinos' )
        
        expect( response.body ).toHaveProperty( 'quantidade' )
        expect( response.body ).toHaveProperty( 'opcoesRegiao' )
        expect( response.body ).toHaveProperty( 'opcoesDestino' )

    } )

    it( "Dev retornar os tipos de viagens", async () => {

        const response = await request( app )
            .get( '/api/tipoviagem' )

        expect( response.body instanceof Array ).toBe( true )

    } )

    it( "Deve retornar os tipos de tarifas", async () => {

        const response = await request( app )
            .get( '/api/tipostarifa' )

        expect( response.body instanceof Array ).toBe( true )

    } )

} )
