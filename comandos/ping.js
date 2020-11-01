const message = require("../eventos/message");

module.exports = (client, message, args) => { 
    message.channel.send("Pong 👻"); 
  
  }