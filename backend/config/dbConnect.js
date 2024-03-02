
'use strict';
require('colors')
const { connect } = require('mongoose')
const { GLOBAL } = require('../config')
const { LOG } = require('../constant')

// mongoose
const dbConnect = async () => {
    try {
        await connect(GLOBAL.DB_URI)
        console.log(LOG.DB_STATUS_MSG.bgYellow)
    } catch (error) {
        console.error(error?.message)
        process.exit()
    }
}

dbConnect()

module.exports = dbConnect

// sequelize
// // Sequelize is a package that abstracts out the need to write 
// // SQL queries, relying instead on their models to do it for you
// const sequelize = new Sequelize(process.env.DB_NAME,
//  process.env.DB_USER, process.env.DB_PASSWORD, {
//  host: process.env.DB_HOST,
//  dialect: 'mysql'
// });

// const connectMysql = async () => {
//  try {
//  await sequelize.authenticate();
//  console.log(`Successful connection to MySQL Database 
// ${process.env.DB_NAME}`);
//  } catch (error) {
//  console.error('Unable to connect to MySQL database:', error);
//  process.exit(1);
//  }
// }

// connectMysql();
// module.exports = {
//  Sequelize: sequelize
// }


