require('dotenv').config();

module.exports = {
    BASE_URL: process.env.BASE_URL,
    HEADLESS: process.env.HEADLESS === 'true'
};