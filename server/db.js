const {Sequelize} = require('sequelize')

// module.exports = new Sequelize(
//     process.env.DB_NAME, // db name
//     process.env.DB_USER, // db user
//     process.env.DB_PASSWORD, // pass
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// )
module.exports = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

