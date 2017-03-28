module.exports = {
  "allow_create_new_accounts" : true,
  "send_emails"              : false,
  "application_sender_email" : process.env.SENDER_EMAIL || "email@test.com",

  // transports email via SMTP
  "email_smtp_transporter" : {
    "host" : process.env.SMTP_SERVER || "localhost",
    "port" : process.env.SMTP_PORT   || 25,
    "auth" : {
      "user" : process.env.SMTP_LOGIN    || "user",
      "pass" : process.env.SMTP_PASSWORD || "pass"
    }
  },

  // transports emails via Mailgun REST API (which is 3x faster than SMTP)
  // precedes email_smtp_transporter if api_key and domain are set
  "email_mailgun_transporter" : {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain:  process.env.MAILGUN_DOMAIN
    }
  },
  "crypto_secret" : process.env.CRYPTO_SECRET || "!2~`HswpPPLa22+=±§sdq qwe,appp qwwokDF_",
  "application_domain" : process.env.APPLICATION_DOMAIN || "http://app.timeoff.management",
  "promotion_website_domain" : process.env.PROMOTION_WEBSITE_DOMAIN || "http://timeoff.management"
}
