const express = require('express');
const contactCtrlr = require("../../controllers/contact/contact")

const router = express.Router()


router.post("/", contactCtrlr.contactValidationRules, contactCtrlr.postContact)


module.exports = router