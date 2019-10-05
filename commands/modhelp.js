const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

    let bicon = client.user.displayAvatarURL;
    let moderatoracommands = new Discord.RichEmbed()
    .setAuthor('moderator accessible Commands', 'https://i.imgur.com/NXWBmum.png')
    .setThumbnail(bicon)
    .setDescription("This command shows Fuyu's moderator commands.")
    .setColor("#980aab")
    .addField("moderator commands:", "Vban [@user] - bans mentioned user!\nVmute [@user] [time] [reason] - mutes mentioned user!\nVdm [message] - sends DM to all server members. (Admin only)\nVsay [#channel] [message] - Sends message to channel(mentioning channel is optional(admin only))\nVclear [amount] - clears chat\nVkick [@user] - kicks mentioned user!\nVbotinfo - info of about this bot\nVserverinfo - info about this server\nVhelp - shows all usable commands")

    return message.channel.send(moderatoracommands);
   }else message.channel.send("u aren't powerful enough to access this area!")
}
module.exports.help = {
    name: "modhelp"
}
