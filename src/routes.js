const express = require( 'express' )
const UserControlle = require( './controller/UserController.js' )

const routes = express.Router()

routes.get( '/users', UserControlle.index )
routes.post( '/users', UserControlle.create )
routes.delete( `/users/:id`, UserControlle.delete )

module.exports = routes