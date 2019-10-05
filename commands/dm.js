const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(message.member.hasPermission(["SEND_MESSAGES"])){
        
    message.delete()

    let text = message.content.slice('Vdm'.length);
    message.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
});
}}

                                      

module.exports.help = {
    name: "dm"
}
