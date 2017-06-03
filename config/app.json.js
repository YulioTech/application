module.exports = {
  "allow_create_new_accounts" : process.env.ALLOW_CREATE_NEW_ACCOUNTS || true,
  "allow_restore"             : process.env.ALLOW_RESTORE || false,
  "send_emails"               : process.env.SEND_EMAILS || false,
  "application_sender_email"  : process.env.SENDER_EMAIL || "email@test.com",

  // transports email via SMTP
  "email_transporter" : {
    "host" : process.env.SMTP_SERVER || "localhost",
    "port" : process.env.SMTP_PORT   || 25,
    "auth" : {
      "user" : process.env.SMTP_LOGIN    || "user",
      "pass" : process.env.SMTP_PASSWORD || "pass"
    }
  },
  "crypto_secret" : process.env.CRYPTO_SECRET || "!2~`HswpPPLa22+=±§sdq qwe,appp qwwokDF_",
  "application_domain" : process.env.APPLICATION_DOMAIN || "http://app.timeoff.management",
  "promotion_website_domain" : process.env.PROMOTION_WEBSITE_DOMAIN || "http://timeoff.management"
}
