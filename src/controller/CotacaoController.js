const requestApi = require( 'request' )
const options = require( '../API/utils/header.js' )

module.exports = {

    async index( request, response ){
        try {
            const json = request.body
            await requestApi.post( options.url+'/Cotacao', { json:json, headers: options.headers } , ( err, res, body ) => {
                const idProduto = body.produtos[0].idProduto

                response.status( 200 ).json( {
                    msg: `O produto indicado para você é o ${ idProduto }`
                } )
            } )

        } catch (error) {
            response.status( 400 ).json( {error} )
        }
    }

}