const Sequelize = require('sequelize');
const {DB_HOST,DB_NAME,DB_PASS,DB_USER} = require('./index');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: DB_HOST,
});
const connectToDB = function (){
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
}
module.exports = {sequelize,connectToDB};