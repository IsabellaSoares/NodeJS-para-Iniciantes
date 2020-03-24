// OBJETIVOS

// 1 - Obter um usuário
// 2 - Obter o telefone de um usuário a partir de seu ID
// 3 - Obter o endereço do usuário pelo ID

// Importar módulo para converter funções com callback em Promises
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone (idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '119925',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

async function main () {
    try {
        console.time('medida-promise')

        const usuario = await obterUsuario()

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)

        console.timeEnd('medida-promise')
    } catch (erro) {
        console.error('Deu ruim', error)
    }
}

main()