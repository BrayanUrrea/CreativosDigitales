const {Client} = require('pg')

client = new Client({
    user:'postgres',
    password: 'postgres', 
    port: 5432,
    database: 'test'
})


module.exports = {
    client
}