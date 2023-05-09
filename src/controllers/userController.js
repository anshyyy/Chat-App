const UserRepo = require("../repository/userRepo");
const userRepo = new UserRepo();

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await userRepo.createUser(req.body);
        console.log(user);
        return res.status(200).json({
            success: true,
            err: " ",
            data: user,
            message: "created user"
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to create user"
        })
    }

}

const getUser = async(req,res) => {
    try {
        console.log(req.body);
        console.log("sdsdc");
        const user = await userRepo.findUser(req.params.username);
        console.log(user);
        return res.status(200).json({
            success: true,
            err: " ",
            data: user,
            message: "fetched user"
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to fetch user"
        })
    }
}
const getAll = async(req,res) => {
    try {
        console.log(req.body);
        console.log("sdsdc");
        const user = await userRepo.findAll();
        console.log(user);
        return res.status(200).json({
            success: true,
            err: " ",
            data: user,
            message: "fetched user"
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to fetch user"
        })
    }
}

const loadlogin = async(req,res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to load login"
        })
    }
} 

const loaddashboard = async(req,res) => {
    try {
        res.render('dashboard');
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to load dashboard"
        })
    }
} 


module.exports ={createUser,getUser,getAll,loaddashboard,loadlogin};