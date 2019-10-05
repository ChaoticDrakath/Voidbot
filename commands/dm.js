const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(message.member.hasPermission(["ADMINISTRATOR"])){

    let text = msg.content
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
}};

module.exports.help = {
    name: "dm"
}
