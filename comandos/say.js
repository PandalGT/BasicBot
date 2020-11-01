const message = require("../eventos/message");

module.exports = (client, message , args) => {
    let texto = args.join(' ');
    if(!texto) return message.channel.send('❌ No pusiste el mensaje')
    message.channel.send(texto);
}