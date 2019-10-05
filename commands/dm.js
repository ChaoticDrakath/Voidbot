const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(message.member.hasPermission(["ADMINISTRATOR"])){
        
    message.delete()

    let text = message.content.slice('Vdm'.length);
    message.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
  }else message .channel.send("You don't have required permissions to access this command!");
}

                                      

module.exports.help = {
    name: "dm"
}
