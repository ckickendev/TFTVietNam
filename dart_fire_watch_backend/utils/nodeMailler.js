const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your-email@example.com',
        pass: 'your-password'
    }
});


// Define email options
let mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'Hello from Node.js',
    text: 'Hello, this is a test email sent from Node.js.'
};

// Send email
const sendEmailHandler = ({mailOptions}) => {
    const mailOptions =
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    
}
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
