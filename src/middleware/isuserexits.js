const {user} =require('../models/index');


const isUserExits = async (req,res,next) => {

    const email = req.body.email;
    const olduser = await user.findOne({where : {email : email}});
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