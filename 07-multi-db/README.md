### Postgres
#### Lista de comandos

- `docker ps` -> quais são os processos que estão rodando na máquina
- `docker run --name postgres -e POSTGRES_USER=seu_usuario -e POSTGRES_PASSWORD=sua_senha -e POSTGRES_DB=heroes -p 5432:5432 -d postgres` -> faz o download da imagem e configura o Postgres
- `docker ps` -> deve aparecer o processo do Postgres
- `docker exec -it postgres /bin/bash` -> entra no container, onde é possível executar comandos
  - `psql` -> fazer login no banco
  - `exit` -> sair do container
- `docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer` -> executar uma instância do Adminer em segundo plano
- `docker ps` -> deve aparecer os processos do Postgres e do Adminer

#### Adminer na porta 8080

- *Sistema* -> PostgreSQL
- *Servidor* -> postgres
- *Usuário* -> meu_usuario
- *Senha* -> minha_senha
- *Base de dados* -> heroes

### MongoDB
#### Lista de comandos

- `docker ps` -> quais são os processos que estão rodando na máquina
- `docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senha_admin -d mongo:4` -> faz o download da imagem e configura o Postgres
- `docker ps` -> deve aparecer o processo do MongoDB
- `docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient` -> executar uma instância do Adminer em segundo plano

#### MongoDB na porta 3000

- *Connection name* -> mongodb
- *Host* -> mongodb
- *Port* -> 27017
- *Database name* -> admin
- *Authentication* -> Scram-Sha-1
- *Username* -> admin
- *Password* -> senha_admin
- *Authentication* -> admin

#### Criando banco de dados no MongoDB

- `docker exec -it mongodb mongo --host localhost -u admin -p senha_admin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'username', pdw: 'minha_senha', roles: [{role: 'readWrite', db: 'herois'}]})"`
- Ir até o _localhost:3000_, desconectar do MongoDB e criar nova conecção
  - *Connection name* -> mongodb-readWrite
  - *Host* -> mongodb
  - *Port* -> 27017
  - *Database name* -> herois
  - *Authentication* -> Scram-Sha-1
  - *Username* -> username
  - *Password* -> minha_senha
  - *Authentication* -> herois