const express = require('express');
const gitContrlr = require("../../controllers/github/github.js");
const router = express.Router()



router.get("/infos", gitContrlr.getInfosFromGithub);

module.exports = router