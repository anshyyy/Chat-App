const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    BASE_URL:process.env.BASE_URL,
    DB_HOST:process.env.DB_HOST,
    DB_NAME:process.env.DB_NAME,
    DB_USER:process.env.DB_USER,
    DB_PASS:process.env.DB_PASS
}