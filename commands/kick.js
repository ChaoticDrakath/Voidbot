const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        if (member = message.mentions.members.first()) {
        member.kick().then((member) => {
            message.channel.send(":spy: " + member.displayName + "has been kicked!")
        })
    }else message.channel.send("u didn't mention anyone!");
  }else message .channel.send("You don't have required permissions to access this command!");
}  

module.exports.help = {
    name: "kick"
}
