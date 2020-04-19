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

} )
