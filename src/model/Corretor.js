const mongoose = require( '../database/index.js' )

const CorretorSchema = new mongoose.Schema( {
    nome:{ type: String },
    email:{ type: String },
    telefone:{ type: String },
    senha: { type: String },
    susep: { type: String }
} )

const Corretor = mongoose.model( 'Corretor', CorretorSchema )

module.exports = Corretor