const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let bicon = client.user.displayAvatarURL;
    let useracommands = new Discord.RichEmbed()
    .setAuthor('Help', 'https://i.imgur.com/NXWBmum.png')
    .setThumbnail(bicon)
    .setColor("#980aab")
    .addField("Commands:", "Vbotinfo - info of about this bot\n\nVavatar - shows mentioned user avatar.\n\nVserverinfo - info about this server\n\nVhelp - gives help\n\nVmodhelp - Moderation commands", true)
    .addField("Moderation Commands:", "Vban [@user] - bans mentioned user!\n\nVuserinfo [@user] - shows mentioned user info (mentioning is optional)\n\nVmute [@user] [time] [reason] - mutes mentioned user!\n\nVdm [message] - sends DM to all server members. (Admin only)\n\nVsay [#channel] [message] - Sends message to channel(mentioning channel is optional)\n\nVclear [amount] - clears chat\n\nVkick [@user] - kicks mentioned user!\n\nVbotinfo - info of about this bot\n\nVserverinfo - info about this server\n\nVhelp - shows all usable commands", true)

    return message.channel.send(useracommands);
   }

module.exports.help = {
    name: "help"
}
