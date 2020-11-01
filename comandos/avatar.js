const Discord = require('discord.js')
const message = require('../eventos/message')
module.exports = (client, message, args) => {
    let panda = message.mentions.users.first();
    if (!panda) panda = message.author;
    let embed = new Discord.MessageEmbed()
    .setImage(`${panda.displayAvatarURL()}`)
    .setColor('PINK')
    .setFooter(`avatar de ${panda.username.tag}`)
    message.channel.send(embed)
}