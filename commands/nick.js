const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    message.mentions.members.first.setNickname(message.content.replace('changeNick ', ''));
}}

module.exports.help = {
    name: "nick"
}
