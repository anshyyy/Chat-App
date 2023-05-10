const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
       allowNull:false
       },
       isOnline : {
         type:DataTypes.STRING,
         default : "0"
       },
       room_id: {
        type: DataTypes.STRING,
       },
 });

 sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = User;