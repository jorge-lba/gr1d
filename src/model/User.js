const mongoose = require( '../database/index.js' )

const UserSchema = new mongoose.Schema( {
    nome:{ type: String },
    email:{ type: String },
    senha: { type: String },
} )

const User = mongoose.model( 'User', UserSchema )

module.exports = User