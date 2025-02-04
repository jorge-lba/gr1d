const request = require( 'supertest' )
const app = require( '../../src/app.js' )
const mongoose = require( '../../src/database/index.js' )

jest.setTimeout( 40000 )

const data = {
    user:{
        nome: 'Jorge Alegretti',
        email: 'jorge@test.com',
        senha: 'hackathonGr1d'
    },
    cotacao:{
        
        destinos: [
          "AU"
        ],
        passageiros: [
          {
            nome: "Jorge Alegretti",
            dataNascimento: "1992-04-18T17:27:23.551Z"
          }
        ],
        dataSaida: "2020-04-19T17:27:23.551Z",
        dataRetorno: "2020-10-18T17:27:23.551Z",
        tipoViagem: 1,
        tipoTarifa: 2
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
        expect( response.body.user ).toHaveProperty( '_id' )
        expect( response.body.user ).toHaveProperty( 'nome', 'Jorge Alegretti' )
        expect( response.body.user ).toHaveProperty( 'email', 'jorge@test.com' )

        data.user.id = response.body.user._id
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
        expect( response.body.user ).toHaveProperty( 'id', data.user.id )
        expect( response.body.user ).toHaveProperty( 'nome', 'Jorge Alegretti' )
        expect( response.body.user ).toHaveProperty( 'email', 'jorge@test.com' )

    } )

} )

describe( 'USER_COTACAO', () => {

    it( 'Deve fazer uma cotação de seguro viagem', async () => {

        const response = await request( app )
            .post( '/users/cotacao' )
            .send( data.cotacao )

        expect( response.body ).toHaveProperty( 'msg' )

    } )

} )