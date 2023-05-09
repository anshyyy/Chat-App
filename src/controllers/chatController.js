const ChatRepo = require("../repository/chatRepo");
const chatRepo = new ChatRepo();


const create = async(req,res) => {
    try {

        const response = await chatRepo.createChat(req.body);

        return res.status(200).json({
            success: true,
            err: " ",
            data: response,
            message: "created chats"
        });
        
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to create chat"
        })
    }
}

const getChat = async(req,res) => {
    try {

        console.log(req.query);
        const response = await chatRepo.getChat(req.query.sender,req.query.receiver);
        console.log(res);
        return res.status(200).json({
            success: true,
            err: " ",
            data: response,
            message: "fetched chats"
        });  
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to fetch chat"
        })
    }
}

module.exports = {
    create,getChat
}