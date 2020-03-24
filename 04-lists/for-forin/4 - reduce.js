const { obterPessoas } = require('./service')

async function main () {
    try {
        const { results } = await obterPessoas('a')
        const pesos = results.map(pessoa => parseInt(pessoa.height))

        const total = pesos.reduce((anterior, proximo) => anterior + proximo, 0)
        console.log('total', total)

        const minhaLista = [
            ['Isa', 'Soares'],
            ['NodeJS', 'ReactJS']
        ]

        const listaTotal = minhaLista.reduce((anterior, proximo) => anterior.concat(proximo), []).join(', ')
        console.log('listaTotal', listaTotal)
    } catch (error) {
        console.error('error', error)
    }
}

main()