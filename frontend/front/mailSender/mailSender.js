const nodemailer = require("nodemailer");
require("dotenv").config();

function mailSender(email, text) {
    return new Promise((resolve, reject) => {
        const SERVICE = process.env.SERVICE_MAIL_APP;
        const HOST = process.env.HOST_MAIL_APP;
        const USER_MAIL = process.env.USER_MAIL;
        const PASS_MAIL_APP = process.env.PASS_MAIL_APP;
        const MAIL_TO_RECEIVE = process.env.MAIL_TO_RECEIVE;

        const transporter = nodemailer.createTransport({
            service: SERVICE,
            host: HOST,
            auth: {
                user: USER_MAIL,
                pass: PASS_MAIL_APP
            }
        });

        const mailOptions = {
            from: `${email}`,
            to: MAIL_TO_RECEIVE,
            subject: 'IMPORTANT ',
            text: `De: ${email}\n\n${text}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
                reject(false);
            } else {
                console.log('E-mail envoyé avec succès:', info.response);
                resolve(true);
            }
        });
    });
}

module.exports = mailSender;
