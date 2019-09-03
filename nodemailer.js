//const nodemailer = require('nodemailer');

'use strict';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        //port: 465,
        //secure: true,
        //host: 'smtp.ethereal.email',
        //port: 587,
        //secure: false, // true for 465, false for other ports
        auth: {
            //user:'garry.zieme51@ethereal.email', //testAccount.user, // generated ethereal user
            user: 'wcordova_est@utmachala.edu.ec',
            pass: '0750360919@Sti' //testAccount.pass // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        //from: '"Steeven Córdova" <wilson972906@gmail.com>', // sender address
        from: '"Wilson Steeven Córdova" <wcordova_est@utmachala.edu.ec>',
        to: 'wilsonsteeven@outlook.com, wilson972906@gmail.com', // list of receivers
        subject: 'Pruebas con Nodemailer 💖', // Subject line
        text: 'Hello world?, esta es una super-practica de nodemailer', // plain text body
        html: `<b>Hello world?</b>
        <h1>Esta es mi primera prueba con nodemailer</h1>
        <h3>Enviado desde mi correo institucional</h3>` // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
