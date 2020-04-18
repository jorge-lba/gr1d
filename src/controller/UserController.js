const User = require( '../model/User.js' )

module.exports = {

    async index( request, response ) {

        try {
            
            const users = await User.find()

            response.status( 200 ).json( users )

        } catch (error) {  

            response.status( 400 ).json( { error } )
            
        }

    },

    async create( request, response ){

        try {
            
            const user = request.body
            const userCreate = await User.create( user )

            response.status( 200 ).json( {
                msg: 'Usuário criado com sucesso.',
                user: userCreate
            } )

        } catch (error) {
            
            response.status( 400 ).json( { error } )

        }

    },

    async delete( request, response ){

        try {
            
            const userDeleted = await User.findByIdAndDelete( request.params.id )

            response.status( 200 ).json( {
                msg: 'Usuário deletado com sucesso.',
                user: {
                    id: userDeleted._id,
                    nome: userDeleted.nome,
                    email: userDeleted.email
                }
            } )

        } catch (error) {
            
            response.status( 400 ).json( { error } )

        }

    }

}