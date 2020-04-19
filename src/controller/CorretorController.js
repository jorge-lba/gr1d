const Corretor = require( '../model/Corretor.js' )

module.exports = {

    async index( request, response ){

        try {
            const corretores = await Corretor.find()

            response.status( 200 ).json( corretores )
        } catch (error) {
            response.status( 400 ).json( {error} )
        }

    },

    async create( request, response ){

        try {
            
            const corretor = request.body
            const corretorCreate = await Corretor.create( corretor )

            response.status( 200 ).json( {
                msg: 'Corretor criado com sucesso.',
                corretor: corretorCreate
            } )

        } catch (error) {
            response.status( 400 ).json( {error} )
        }

    },

    async delete( request, response ){

        try {
            
            const corretorDeleted = await Corretor.findByIdAndDelete( request.params.id )

            response.status( 200 ).json( {
                msg: 'Corretor deletado com sucesso.',
                corretor: {
                    id: corretorDeleted._id,
                    nome: corretorDeleted.nome,
                    email: corretorDeleted.email
                }
            } )

        } catch (error) {
            response.status( 400 ).json( { error } )
        }

    }
}