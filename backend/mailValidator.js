require("dotenv").config()

async function validateEmail(email) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('email', email);

    const url = 'https://email-validator8.p.rapidapi.com/api';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.API_KEY_MAIL_VALIDATOR,
            'X-RapidAPI-Host': process.env.HOST_RAPID_API
        },
        body: encodedParams
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        return result
    }
}

module.exports = validateEmail
