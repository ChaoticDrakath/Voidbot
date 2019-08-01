const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("This command shows Information about VoidGuard.")
    .setColor("#980aab")
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username)
    .addField("Bot Commander", 'Void')
    .addField("Created On", client.user.createdAt);

    return message.channel.send(botembed);
   }

module.exports.help = {
    name: "botinfo"
}