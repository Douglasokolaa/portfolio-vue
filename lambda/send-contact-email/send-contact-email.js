// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const mailgun = require("mailgun-js");
const { validateEmail, validateLength } = require('./validations')

exports.handler = (event, context, callback) => {
  console.log('an' . event);
  if (
    !process.env.CONTACT_EMAIL ||
    !process.env.MAILGUN_DOMAIN ||
    !process.env.MAILGUN_APIKEY ||
    !process.env.SENDER_EMAIL ||
    !process.env.EMAIL_SUBJECT
  ) {
    return callback(null, {
      statusCode: 500,
      body: '\
      process.env.CONTACT_EMAIL,\
      process.env.CONTACT_EMAIL,\
      process.env.MAILGUN_DOMAIN,\
      process.env.MAILGUN_APIKEY,\
      process.env.SENDER_EMAIL\
      process.env.EMAIL_SUBJECT must be defined',
    })
  }


  const DOMAIN = process.env.MAILGUN_DOMAIN;
  const APIKEY = process.env.MAILGUN_APIKEY;
  const SENDER = process.env.SENDER_EMAIL;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
  const SUBJECT = process.env.EMAIL_SUBJECT;
  const mg = mailgun({ apiKey: APIKEY, domain: DOMAIN });
  const body = JSON.parse(event.body)

  try {
    validateLength('body.name', body.name, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    })
  }

  try {
    validateEmail('body.email', body.email)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    })
  }

  try {
    validateLength('body.details', body.message, 10, 1000)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    })
  }

  const data = {
    from: `"${body.email}" <${SENDER}>`,
    to: CONTACT_EMAIL,
    subject: SUBJECT,
    text: `Name: ${body.name}\n\rEmail: ${body.email}\n\rMessage:\r\n ${body.message}`
  };

  mg.messages().send(data, function (error, body) {
    console.log(body);
    if (error) {
      callback(null, {
        statusCode: 500,
        body: error.message,
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: '',
      })
    }
  });
}
