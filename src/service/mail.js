const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_KEY);

exports.send = async (to, subject, body) => {
  sendgrid.send({
    to: to,
    from: process.env.SENDGRID_EMAIL_SENDER,
    subject: subject,
    content: [
      {
        type: "text/html",
        value: body
      }
    ]
  });
};
