const express = require('express');
const router = express.Router();
const {createUser,getUser,getAll} = require('../controllers/userController'); 

const {create,getChat} = require('../controllers/chatController');


router.post("/user",createUser);
router.get("/user/:username",getUser);
router.get("/user/get-all",getAll);


router.post("/chat",create);
router.get("/chat/get-chat",getChat);


module.exports = router;