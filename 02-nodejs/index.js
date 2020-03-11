// OBJETIVOS

// 1 - Obter um usuário
// 2 - Obter o telefone de um usuário a partir de seu ID
// 3 - Obter o endereço do usuário pelo ID

function obterUsuario (callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        });
    }, 1000);
}

function obterTelefone (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '119925',
            ddd: 11
        });
    }, 2000);
}

function obterEndereco (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        });
    }, 2000);
}

obterUsuario(function resolverUsuario (erro, usuario) {
    if (erro) {
        console.error('Deu ruim em ResolverUsuario', erro);
        return;
    }
    
    obterTelefone(usuario.id, function resolverTelefone (erro1, telefone) {
        if (erro1) {
            console.error('Deu ruim em ResolverTelefone', erro1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco (erro2, endereco) {
            if (erro2) {
                console.error('Deu ruim em ResolverEndereco', erro2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        });        
    });

    
});
// const telefone = obterTelefone(usuario.id);
// console.log('usuario', usuario);
// console.log('telefone', telefone);