const request = require( 'supertest' )
const app = require( '../../src/app.js' )
const mongoose = require( '../../src/database/index.js' )

jest.setTimeout( 40000 )

const data = {
    user:{
        nome: 'Jorge Alegretti',
        email: 'jorge@test.com',
        senha: 'hackathonGr1d'
    }
}

describe( 'USER', () => {

    afterAll( async ( ) => mongoose.disconnect() )

    it( 'Deve criar um usuário.', async () => {
        const response = await request( app )
            .post( '/users' )
            .send( data.user )
        
        expect( response.body ).toHaveProperty( 'msg', 'Usuário criado com sucesso.' )
        expect( response.body ).toHaveProperty( 'user' )
        expect( response.body ).toHaveProperty( 'id' )
        expect( response.body.user.nome ).toHaveProperty( 'nome', 'Jorge Alegretti' )
        expect( response.body.user.email ).toHaveProperty( 'email', 'jorge@test.com' )

        data.user.id = response.body.id
    } )

    it( 'Deve listar os usuários.', async () => {
          const response = await request( app )  
            .get( '/users' )

        expect( response.body instanceof Array ).toBe( true )
    } )

    it( 'Deve deletar um usuário.', async () => {

        const response = await request( app )
            .delete( `/users/${data.user.id}` )
            .send( data.user )
        
        expect( response.body ).toHaveProperty( 'msg', 'Usuário deletado com sucesso.' )
        expect( response.body ).toHaveProperty( 'user' )
        expect( response.body ).toHaveProperty( 'id', data.user.id )
        expect( response.body.user.nome ).toHaveProperty( 'nome', 'Jorge Alegretti' )
        expect( response.body.user.email ).toHaveProperty( 'email', 'jorge@test.com' )

    } )

} )