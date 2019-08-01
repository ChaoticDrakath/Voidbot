const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let bicon = client.user.displayAvatarURL;
    let useracommands = new Discord.RichEmbed()
    .setAuthor('User accessible Commands', 'https://i.imgur.com/NXWBmum.png')
    .setThumbnail(bicon)
    .setDescription("This command shows Voidguard's user accessible commands.")
    .setColor("#980aab")
    .addField("User accessible commands", "Vbotinfo - info of about VoidGuard\nVserverinfo - info about this server\nVcommands - commands subsection\nVuac - user accessible commands.")

    return message.channel.send(useracommands);
   }

module.exports.help = {
    name: "uac"
}