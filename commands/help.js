const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let bicon = client.user.displayAvatarURL;
    let useracommands = new Discord.RichEmbed()
    .setAuthor('Help', 'https://i.imgur.com/NXWBmum.png')
    .setThumbnail(bicon)
    .setColor("#980aab")
    .addField("Commands:", "Vbotinfo - info of about VoidGuard\nVserverinfo - info about this server\nVhelp - gives help")

    return message.channel.send(useracommands);
   }

module.exports.help = {
    name: "help"
}
