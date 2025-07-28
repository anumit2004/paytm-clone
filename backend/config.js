require('dotenv').config();
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'Paytm_Secret_Key',
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT,
}