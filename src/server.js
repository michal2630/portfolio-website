const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
    host: 'poczta.o2.pl', // e.g. smtp.gmail.com
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
};

app.listen(port, () => console.log(`Listening on port ${port}`))
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('All works fine, congratz!');
    }
});

app.use(express.json());
app.post('/send', (req, res, next) => {
    console.log('asd');
    const from = req.body.from;
    const to = req.body.to;
    const message = req.body.messageHtml;


    var mail = {
        from: from,
        to: to,
        subject: 'Contact form request',
        html: message
    };
    console.log(mail);
    transporter.sendMail(mail, (err, data) => {
        console.log('Err');
        console.log(err);
        console.log('Data');
        console.log(data);
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
});
