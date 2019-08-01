const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if(args[0])
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
    })}
}

module.exports.help = {
    name: "clear"
}