# [Travel Ace - Seguro de Viagem](https://insurance.gr1d.io/developers/api/seguro-viagem/d6edd61b-6ded-4b51-add6-1b6ded5b51b6#overview)

## Dados Básico

- destinos
- tipoViagem
- tipoTarifa	
- dataSaida
- dataRetorno
- valorCompra
- formaPagamento
- cupom
- cnpjAgencia
- cpfEmissor
- numeroControle
- identificacao
- identificacao2
- nomeContatoBrasil
- telefoneContatoBrasil
- celularContatoBrasil
- valorTotalPacote
- CodigoOperacaocanalDeVenda
  
## Dados do Titular

- codigo
- nome
- sobrenome
- sexo
- documento
- tipoDocumento
- telefone
- celular
- email
- dataNascimento
- endereco
- cep
- numero
- cidade
- bairro
- uf
- complemento
- idade
- dataEmissaoDocumento
- origemDocumento
- beneficiarios

## Dados dos Integrantes

- codigo
- nome
- sobrenome
- sexo
- tipoDocumento
- documento
- dataNascimento
- idade
- dataEmissaoDocumento
- origemDocumento
- email
- beneficiarios
  
## Dados do Produto

- codigoProduto
- valorProduto
- codigoPeriodoMultiViagem
- codigoTarifaAcordo
- cambio

## Dados para Benefícios Opcionais

- codigoBeneficio
- valorBeneficio
- dadosPassageiro
  - codigoPassageiro

## Dados para Beneficios Customizaveis

- codigoBeneficio
- valorBeneficio
  - codigoPassageiro

## Dados para Produtos Avulsos

- codigoProduto
- codigoPeriodoMultiViagem
- codigoTarifaAcordo
- valorProduto
- dadosPassageiroProdutoAvulso
  - codigoPassageiro
- dadosBeneficiosOpcionais
- dadosBeneficiosCustomizavel

## Dados para Pagamento

- codigoOperadora
- nomeTitularCartao
- cpfTitular
- numeroCartao
- codigoSeguranca
- mesValidade
- anoValidade
- parcelas

## Dados do Passageiro Beneficio Opcional

- codigoPassageiro

## Dados do Passageiro Beneficio Customizavel

- codigoPassageiro
  
## Dados do Passageiro Produto Avulso

- codigoPassageiro

## Dados para Cotação 

- destinos	
- passageiros
    - PassageiroRequest
        - nome
        - dataNascimento
- dataSaida
- dataRetorno
- tipoViagem
= tipoTarifa
- produtoAvulso
- cupom
- classificacoes

## Passageiro 

- nome
- dataNascimento
