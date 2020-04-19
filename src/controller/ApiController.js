const requestApi = require( 'request' )
const options = require( '../API/utils/header.js' )

module.exports = {

    async destinos( request, response ){

        const filtroRegiao = ( element ) => {
            const result = element.map( dados => ({
                regiao: dados.regiao,
                siglaRegiao: dados.siglaRegiao
            }) )
            return result.reduce( ( atual, proximo ) => {
                const regiaoAtual = atual.length > 0
                    ? atual.map( dados => dados.regiao )
                    : []

                const regiaoProxima = proximo.regiao

               if( regiaoAtual.indexOf( regiaoProxima ) > -1){
                    return atual
                }else {
                    atual.push( proximo )
                    return atual
                }
            },[] )

        } 

        const filtroPais = ( element ) => {
            const result = element.map( dados => ({
                pais: dados.pais,
                siglaPais: dados.siglaPais
            }) )
            return result.reduce( ( atual, proximo ) => {
                const paisAtual = atual.length > 0
                    ? atual.map( dados => dados.pais )
                    : []

                const paisProxima = proximo.pais

               if( paisAtual.indexOf( paisProxima ) > -1){
                    return atual
                }else {
                    atual.push( proximo )
                    return atual
                }
            },[] )

        }

        try {
            
            await requestApi.get( options.url+'/destinos',{ headers: options.headers } ,( err, res, body ) => {
                const result = JSON.parse(body)
                const quantidade = result.length
                const regiao = filtroRegiao( result )
                const pais = filtroPais( result )
                
                response.status(200).json( {
                    quantidade,
                    opcoesRegiao: regiao,
                    opcoesDestino: pais
                } )
            } )

        } catch (error) {
            response.status(400).json( { error } )
        }

    }, 

    async tipoViagem( request, response ){

        try {
            
            await requestApi.get( options.url + '/tipoviagem', { headers: options.headers }, ( err, res, body ) => {

                const result = JSON.parse( body )
                response.status( 200 ).json( result )
         
            } )

        } catch (error) {
            response.status( 400 ).json( {error} )
        }

    },

    async tiposTarifa( request, response ){

        try {

            await requestApi.get( options.url + '/tipostarifa', { headers: options.headers }, ( err, res, body ) => {

                const result = JSON.parse( body )
                response.status( 400 ).json( result )

            } )

        } catch (error) {
            response.status( 400 ).json( { error } )
        }

    }

}