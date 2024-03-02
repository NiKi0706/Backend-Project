const { METHOD } = require('../constant')
const dotenv = require('dotenv')
dotenv.config()

const GLOBAL = {
    API_URL: process.env.API_URL, //add your api url here
    API_KEY: process.env.API_KEY, //add your api key here
    API_HOST: process.env.API_HOST, //add your api host here
    PORT: process.env.PORT || 3003,
    ENV: process.env.ENV, // environment: development
    // DB_URI : `${process.env.DB_SCHEME}${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, // db uri for your mongodb account
    DB_URI: process.env.DB_URI,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    API_OPTIONS: (env, musclePart) => {
        return  { 
            method: 'GET',
            url:  process.env.API_URL,
            params: {muscle: 'biceps'},
            headers: {
                'X-RapidAPI-Key':  process.env.API_KEY,
                'X-RapidAPI-Host':  process.env.API_HOST
            }
        }
    }
}

module.exports = GLOBAL