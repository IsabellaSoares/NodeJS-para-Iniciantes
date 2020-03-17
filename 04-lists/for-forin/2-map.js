const service = require('./service');

async function main () {
    try {
        const result = await service.obterPessoas('a');
        
        // const names = [];
        // result.results.forEach(item => {
        //     names.push(item.name);
        // });

        const names = result.results.map(pessoa => pessoa.name);
        console.log('names', names);
    } catch (error) {
        console.error('error', error);
    }
}

main();