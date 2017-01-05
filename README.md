# Test code for Windows Azure DocumentDB bug
Utf-8 charactors can not update correctly by mongoose.

## Tested Enviroment
Node.js v6.9.1

## Quickstart

#### 1.Install node_mosules
npm install

#### 2 Change the connection string in the main.js

~~~~
var connectionString = 'mongodb://WRITE_YOUR_CONNECTION_STRING'
~~~~

#### 2 for Development
npm start

### License
MIT
