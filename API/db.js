
// const low = require('lowdb').default;

// const FileSync = require('lowdb/adapters/FileSync');
// const MongoAdapter = require('lowdb-mongo');
// const { MongoClient } = require('mongodb');

// async function initializeDatabase() {
//   // Conexión a la base de datos MongoDB 
//   const uri = 'mongodb://localhost:27017';
//   const client = new MongoClient(uri);
//   await client.connect();

//   // Configuración de lowdb con el adaptador de MongoDB
//   const adapter = new MongoAdapter(client.db('Kevin'));
//   const db = low(adapter);

//   // Inicialización de la base de datos con colecciones de usuarios y transacciones
//   db.defaults({ users: [], transactions: [] }).write();

//   return db;
// }
// module.exports = { initializeDatabase };
