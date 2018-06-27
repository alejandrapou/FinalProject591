
const Twitter = {
    CONSUMER_KEY: 'L31UQSQWrRgLAI8XrispwPKcm',
    CONSUMER_SECRET: 'SmKVyneymKfseWqdCiVu7fvPxsTM2Xc9YxMqMEH0QtJibT0p3N',
    OWNER_ID: '448282942',
    CALLBACK_URL: 'http://localhost:5000/auth/callback',
    REQ_TOKEN_URL: 'https://api.twitter.com/oauth/request_token',
    AUTHORIZE_URL: 'https://api.twitter.com/oauth/authorize',
    ACCESS_TOKEN_URL: 'https://api.twitter.com/oauth/access_token',
    SIGNATURE_METHOD: "HMAC-SHA1"
}

module.exports = Twitter