const mailSender = require("../../mailSender/mailSender");
const { validationResult } = require('express-validator');
const mailValidator = require("../../mailValidator")
const { check } = require('express-validator');
exports.postContact = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
    const text = req.body.text;

    const mailvalidator = await mailValidator(email)
    const parsedResponse = JSON.parse(mailvalidator)
    if (parsedResponse.valid) {

        try {
            const mailSent = await mailSender(email, text);
            console.log('value', mailSent);
            res.json({ value: mailSent });
        } catch (error) {
            console.error('Error in postContact:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    else {

        res.json({
            statutV: false,
            Validator: "Votre mail est potentiellement non valid veuillez reessayer avec un autre s'il vous plait"
        })
    }




};



exports.contactValidationRules = [
    check('email').isEmail().withMessage('L\'adresse e-mail n\'est pas valide'),
    check('text').not().isEmpty().withMessage('Le champ texte est requis')
];