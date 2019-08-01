const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let bicon = client.user.displayAvatarURL;
    let botcommands = new Discord.RichEmbed()
    .setAuthor('Commands', 'https://i.imgur.com/NXWBmum.png')
    .setThumbnail(bicon)
    .setDescription("This command shows Voidguard's commands.")
    .setColor("#980aab")
    .addField("User accessible commands", 'use "Vuac" to view user accessible commands!')
    .addField("Moderator accessible commands", 'use "Vmac" to view moderator accessible commands(moderator role required!)!')

    return message.channel.send(botcommands);
   }

module.exports.help = {
    name: "commands"
}