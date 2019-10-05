const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

    let bicon = client.user.displayAvatarURL;
    let moderatoracommands = new Discord.RichEmbed()
    .setAuthor('moderator accessible Commands', 'https://i.imgur.com/NXWBmum.png')
    .setThumbnail(bicon)
    .setDescription("This command shows Fuyu's moderator commands.")
    .setColor("#980aab")
    .addField("moderator commands:", "Vban [@user] - bans mentioned user!\n\nVmute [@user] [time] [reason] - mutes mentioned user!\n\nVdm [message] - sends DM to all server members. (Admin only)\n\nVsay [#channel] [message] - Sends message to channel(mentioning channel is optional(admin only))\n\nVclear [amount] - clears chat\n\nVkick [@user] - kicks mentioned user!\n\nVbotinfo - info of about this bot\nVserverinfo - info about this server\n\nVhelp - shows all usable commands")

    return message.channel.send(moderatoracommands);
   }else message.channel.send("u aren't powerful enough to access this area!")
}
module.exports.help = {
    name: "modhelp"
}
