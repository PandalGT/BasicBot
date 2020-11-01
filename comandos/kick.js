const message = require("../eventos/message");
module.exports = (client, message, args) => { 

    let permsBot = message.guild.me.hasPermission("BAN_MEMBERS") 
    if (!permsBot) return message.channel.send("❌  Bot sin permisos.")         
    let perms = message.member.hasPermission("BAN_MEMBERS") 
    if (!perms) return message.channel.send("❌  Usted no tiene permisos")
    let persona = message.mentions.members.first() 
    if(!persona) return message.channel.send('❌  Debe mencionar a alguien')	
        
    var razon = args.slice(1).join(' ') 
    if(!razon) {
        razon = `Sin Razon` 
    }
				
    razon = razon+`, Kickeado por ${message.author.tag}`

    persona.kick(razon).catch(e => message.reply("❌ | Error Desconocido")) 
    message.channel.send(`📑 | ${persona.user.tag} Kickeado`) 
	
  
}