const Users = require('../models/users');

const create = async (req, res) => {
    try {
        console.log(req.body);
        const user = await Users.create(req.body);
        console.log(user);
        return res.status(200).json({
            success: true,
            err: error,
            data: user,
            message: "created user"
        });
    } catch (error) {
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to create user"
        })
    }

}

module.exports ={create};