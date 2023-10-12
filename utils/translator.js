// translator.js

const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

let key = "4b30f106b69f4333af74baf130e4f66f";
let endpoint = "https://api.cognitive.microsofttranslator.com";
let location = "brazilsouth";

async function translate(text) {
    try {
        const response = await axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            params: {
                'api-version': '3.0',
                'from': 'pt',
                'to': 'en'
            },
            data: [{
                'text': text
            }],
            responseType: 'json'
        });
        
        return response.data[0].translations[0].text;
    } catch (error) {
        throw error;
    }
}

module.exports = translate;
