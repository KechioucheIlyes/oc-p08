require("dotenv").config()

exports.getInfosFromGithub = (req, res) => {
    const token = process.env.TOKEN

    var requestOptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },

    };

    fetch("https://api.github.com/user/repos", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            res.json(result);
        })
        .catch(error => console.log('error', error));
}