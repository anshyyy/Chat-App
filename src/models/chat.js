const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const Chat = sequelize.define("chats", {
    sender: {
        type:
        DataTypes.STRING,
        allowNull:false
      },
      receiver: {
        type:
        DataTypes.STRING,
        allowNull:false
      },
      message: {
        type:
        DataTypes.STRING,
        allowNull:false
      }
 });

 sequelize.sync().then(() => {
    console.log('Chat table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = Chat;