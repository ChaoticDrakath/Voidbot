const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
        
        var userID = args[0].replace('<@', '').replace('>', '').replace('!', '');
        message.channel.send(userID);
        message.guild.members.get(userID).setNickname("test", "nick command executed");
        message.channel.send(`Successfully changed ${args[0]}'s nickname to "${message.channel.server.detailsOf(args[0]).nick}"`);
    }
}

module.exports.help = {
    name: "nick"
}
