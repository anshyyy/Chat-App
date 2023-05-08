const express = require('express');

const app = express();


const setUpAndStart =() => {
    app.listen(3000,()=>{
        console.log("server started at 3000");
    })
}
setUpAndStart();