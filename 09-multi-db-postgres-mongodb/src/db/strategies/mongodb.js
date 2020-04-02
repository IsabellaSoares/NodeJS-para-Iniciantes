const ICrud = require('./interfaces/interfaceCrud');

const Mongoose = require('mongoose');

const STATUS = {
  0: 'Desconectado',
  1: 'Conectado',
  2: 'Conectando',
  3: 'Desconectando'
}

class MongoDB extends ICrud {
  constructor () {
    super();
    this._driver = null;
    this._herois = null;
  }
  
  async isConnected () {
    const state = Mongoose.connection.readyState;

    if (state === 'Conectado') return true;
    if (state !== 'Conectando') return false;

    await new Promise(resolve => setTimeout(resolve, 1000));
    return STATUS[Mongoose.connection.readyState];
  }
  
  defineModel () {
    this._herois = new Mongoose.Schema({
      nome: {
        type: String,
        required: true
      },
      poder: {
        type: String,
        required: true
      },
      insertedAt: {
        type: Date,
        default: new Date()
      }
    });

    const model = Mongoose.model('herois', heroiSchema);
  }
  
  connect () {
    Mongoose.connect('mongodb://meu_usuario:minha_senha@localhost:27017/herois',
      { useNewUrlParser: true }, function (error) {
        if (!error) return;
        console.log('Falha na conexão!', error);
      }
    );
    
    const connection = Mongoose.connection;

    connection.once('open', () => {
      console.log('Database rodando!');
    });
  }

  create (item) {
    const resultCadastrar = await model.create({
      nome: 'Batman',
      poder: 'Dinheiro'
    });
  }
}

module.exports = MongoDB;