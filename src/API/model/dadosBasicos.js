const dadosBasicos = {
    destino: [ String ],
    tipoViagem: Number,
    tipoTarifa: Number,
    dataSaida: String,
    dataRetorno: String,
    valorCompra: Number,
    formaPagamento: Number,
    cupom: String,
    cnpjAgencia: String,
    cpfEmissor: String,
    numeroControle: String,
    identificacao: String,
    identificacao2: String,
    nomeContatoBrasil: String,
    telefoneContatoBrasil: String,
    celularContatoBrasil: String,
    valorTotalPacote: Number,
    CodigoOperacao: Number,
    canalDeVenda: Number
}

const dadosTitular = {
    codigo: Number,
    nome: String,
    sobrenome: String,
    sexo: String,
    documento: String,
    tipoDocumento: Number,
    telefone: String,
    celular: String,
    email: String,
    dataNascimento: String,
    endereco: String,
    cep: String,
    numero: String,
    cidade: String,
    bairro: String,
    uf: String,
    complemento: String,
    idade: Number,
    dataEmissaoDocumento: String,
    origemDocumento: String,
    beneficiarios: String
}

const dadosIntegrantes= {
    codigo: Number,
    nome: String,
    sobrenome: String,
    sexo: String,
    tipoDocumento: Number,
    dataNascimento: String,
    idade: Number,
    dataEmissaoDocumento: String,
    origemDocumento: String,
    email: String,
    beneficiarios: String
}

const dadosProdutos = {
    codigoProduto: Number,
    valorProduto: Number,
    codigoPeriodoMultiViagem: Number,
    codigoTarifaAcordo: Number,
    cambio: Number
}

const dadosBeneficiosOpcionais = {
    codigoBeneficio: Number,
    valorBeneficio: Number,
    dadosPassageiro: [ {
        // DadosPassageiroBeneficioOpcional
        codigoPassageiro: Number
    } ]
}