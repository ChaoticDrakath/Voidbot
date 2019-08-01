const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (message.member.hasPermission(['BAN_MEMBERS'])) {

        if (member = message.mentions.members.first()) {
        member.ban().then((member) => {
            message.channel.send(":spy: " + member.displayName + "has been banned!")
        })
    }else message.channel.send("u didn't mention anyone!")}
}  

module.exports.help = {
    name: "ban"
}