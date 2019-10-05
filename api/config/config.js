
const port = process.env.PORT || 9000;
const mongoURL = 'mongodb://localhost/CSSE'
const saltRounds = 10;

module.exports = {
    port:port,
    mongoURL:mongoURL,
    saltRounds:saltRounds
}