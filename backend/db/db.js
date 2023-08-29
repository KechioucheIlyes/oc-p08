const mongoose = require('mongoose');
require("dotenv").config()


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.crmvpgv.mongodb.net/?retryWrites=true&w=majority`)
    .then(response => console.log("reussie ! 🥳"))
    .catch(err => console.log("erreur", err))





