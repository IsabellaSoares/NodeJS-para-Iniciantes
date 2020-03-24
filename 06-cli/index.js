const Commander = require('commander')
const Heroi = require('./heroi')

async function main () {
    Commander
    .version('v1')
    .option('-n, --nome [value]', 'Nome do Heroi')
    .option('-p, --poder [value]', 'Poder do Heroi')
    .option('-i, --id [value]', 'ID do Heroi')
    .option('-c, --cadastrar', 'Cadastrar um heroi')
    .option('-l, --listar', 'Listar herois')
    .option('-r, --remover', 'Remover um heroi pelo id')
    .option('-a, --atualizar [value]', 'Atualizar um heroi pelo id')
    .parse(process.argv)

    const heroi = new Heroi(Commander)
    
    try {
        if (Commander.cadastrar) {
            const resultado = await database.cadastrar(heroi)

            if (!resultado) {
                console.error('Heroi não foi cadastrado!')
                return
            }

            console.log('Heroi cadastrado com sucesso!')
        }

        if (Commander.listar) {
            const resultado = await database.listar()
            console.log(resultado)
        }

        if (Commander.remover) {
            const resultado = await database.remover(heroi.id)

            if (!resultado) {
                console.error('Não foi possível remover o heroi!')
                return
            }

            console.log('Heroi removido com sucesso!')
        }

        if (Commander.atualizar) {
            const idParaAtualizar = parseInt(Commander.atualizar)
            delete heroi.id

            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await database.atualizar(idParaAtualizar, heroiAtualizar)

            if (!resultado) {
                console.error('Não foi possível atualizar o heroi!')
                return
            }

            console.log('Heroi atualizado com sucesso!')
        }
    } catch (error) {
        console.error('error', error)
    }
}

main()