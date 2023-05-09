const express = require('express');
const router = express.Router();
const {createUser,getUser,loadlogin,getAll, loaddashboard} = require('../controllers/userController'); 

const {create,getChat} = require('../controllers/chatController');
const isUserExits = require('../middleware/isuserexits');


router.post("/user",isUserExits,createUser);
router.get("/user/:username",getUser);
router.get("/user/get-all",getAll);


router.post("/chat",create);
router.get("/chat/get-chat",getChat);



router.get('/',loadlogin);
router.get('/dashboard',loaddashboard);
router.get('*',function(req,res){
     res.redirect('/')
});


module.exports = router;