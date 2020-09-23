const mailer = require('../util/mailer');

const template = (t, user) => {
    return `
    Please click on this link to activate your account: 
    key=${user.activation_id}&lang=${t('lang')}
    `;
}

exports.sendEmail = (t, user) => {
    mailer.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Simple Store - Activation Instructions",
        html: template(t, user)
    }, "email sent").catch(console.error);
};