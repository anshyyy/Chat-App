const User = require("../models/user");
const {sequelize} = require("../config/db");

class UserRepo {
    async createUser(data){
        try {
           const res = await User.create(data);
           return res;
        } catch (error) {
           console.log("Something went wrong in the repository layer!");
           throw(error);
        }
   }
   async findUser(data){
    try {
       const res = await User.findOne({ where: { username: data } });
       return res;
    } catch (error) {
       console.log("Something went wrong in the repository layer!");
       throw(error);
    }
}
async findUser(){
    try {
       const res = await User.findAll();
       return res;
    } catch (error) {
       console.log("Something went wrong in the repository layer!");
       throw(error);
    }
}
}

module.exports = UserRepo;