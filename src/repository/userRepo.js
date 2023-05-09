const {user} = require("../models/index");

class UserRepo {
    async createUser(data){
        try {
           const res = await user.create(data);
           return res;
        } catch (error) {
           console.log("Something went wrong in the repository layer!");
           throw(error);
        }
   }
   async findUser(data){
    try {
       const res = await user.findOne({ where: { username: data } });
       return res;
    } catch (error) {
       console.log("Something went wrong in the repository layer!");
       throw(error);
    }
}
async findUser(){
    try {
       const res = await user.findAll();
       return res;
    } catch (error) {
       console.log("Something went wrong in the repository layer!");
       throw(error);
    }
}
}

module.exports = UserRepo;