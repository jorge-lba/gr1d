const express = require( 'express' )

const UserController = require( './controller/UserController.js' )
const CotacaoController = require( './controller/CotacaoController.js' )
const ApiController = require( './controller/ApiController.js' )

const routes = express.Router()

routes.get( '/users', UserController.index )
routes.post( '/users', UserController.create )
routes.delete( `/users/:id`, UserController.delete )

routes.post( '/users/cotacao', CotacaoController.index )

routes.get( '/api/destinos', ApiController.destinos )
routes.get( '/api/tipoviagem', ApiController.tipoViagem )

module.exports = routes