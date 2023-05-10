const User =require('../models/user');


const isUserExits = async (req,res,next) => {

    const email = req.body.email;
    const olduser = await User.findOne({where : {email : email}});
    console.log(olduser);
    if(olduser){
    return res.status(200).json({
        message : "user exits already",
        success :true
    })
}
next();

}

module.exports =isUserExits;