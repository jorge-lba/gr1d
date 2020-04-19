const request = require( 'supertest' )
const app = require( '../../src/app.js' )

const data = {
    corretor:{
        nome: 'Jorge Alegretti',
        email: 'jorge@test.com',
        telefone: '11 985460185',
        senha: 'hackathonGr1d',
        sasesp: '4681965956295'
    },
}

describe( 'CORRETOR', () => {

    afterAll( async ( ) => mongoose.disconnect() )

    it( 'Deve criar um corretor', async () => {

        const response = await request( app )
            .post( '/corretors' )
            .send( data.corretor )

        expect( response.body ).toHaveProperty( 'msg', 'Corretor criado com sucesso.' )
        expect( response.body ).toHaveProperty( 'corretor' )
        expect( response.body.corretor ).toHaveProperty( '_id' )
        expect( response.body.corretor ).toHaveProperty( 'nome', data.corretor.nome )
        expect( response.body.corretor ).toHaveProperty( 'email', data.corretor.email )
        expect( response.body.corretor ).toHaveProperty( 'telefone', data.corretor.telefone )

        data.corretor.id = response.body.corretor._id

    } )

    it( 'Deve retornar o corretor cadastrado', async () => {
        const response = await request( app )
            .get( '/corretors' )

        expect( response.body instanceof Array ).toBe( true )
    } )

    it( 'Deve deletar o corretor', async () => {
        
        const response = await request( app )
            .delete( `/corretors/${ data.corretor.id }` )
            .send( data.corretor )

            expect( response.body ).toHaveProperty( 'msg', 'Corretor deletado com sucesso.' )
            expect( response.body ).toHaveProperty( 'corretor' )
            expect( response.body.corretor ).toHaveProperty( 'id', data.corretor.id )
            expect( response.body.corretor ).toHaveProperty( 'nome', 'Jorge Alegretti' )
            expect( response.body.corretor ).toHaveProperty( 'email', 'jorge@test.com' )
    } )

} )