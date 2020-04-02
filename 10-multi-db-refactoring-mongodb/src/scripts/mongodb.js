// docker ps (encontrar ID da instância do MongoDB)
// docker exec -it {id} mongo -u meu_usuario -p minha_senha --authenticationDatabase herois

show dbs
use herois
show collections

db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
});

db.herois.find();
db.herois.find().pretty();

for (let i = 0; i <= 100; i++) {
  db.herois.insert({
    nome: `Clone-${i}`,
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
  });
}

db.herois.count();
db.herois.findOne();
db.herois.find().limit(50).sort({ nome: -1 });
db.herois.find({}, { poder: 1, _id: 0 });

// create
db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
});

// find
db.herois.find();

// update
db.herois.update({ _id: ObjectId('') }, { nome: 'Mulher Maravilha' }); // Pode excluir todas as outras informações
db.herois.update({ _id: ObjectId('') }, { $set: { nome: 'Mulher Maravilha' } }); // Apenas atualiza o campo 'nome'

// delete
db.herois.delete({}); // Deleta todo o banco