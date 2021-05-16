

const { Client} = require('pg');

const {host, database, password,port,username: user} =process.env

// module.exports = new Client(`host=pgsql-kg-database-dev-uks-001.postgres.database.azure.com port=5432 role=postgres dbname=${database} user=postgres password=${password} sslmode=require`);
module.exports = new Client(`postgres://${user}:${password}@${host}:${port}/${database}?sslmode=require`);