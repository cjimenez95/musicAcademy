const connection = require('../database/connectionDB');
const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());


//para diferenciar metodos post en las comillas de debe de poner el nombre
router.post('/sendMail', function (req, res) {
    console.log('entro al sendMail');
    // async..await is not allowed in global scope, must use a wrapper
    /*async function main() {

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "cjimenez.95@hotmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);*/

});

router.get('/getTours', function (req, res) {
    console.log('es un get');
    connection.query("CALL getTours()", function (err, result) {
        if (err) {
            return res.send(err)
        }
        else {
            console.log(result);
            return res.send(result)
        }
    }
    )

});

module.exports = router;