const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
  }else message .channel.send("You don't have required permissions to access this command!");
}


module.exports.help = {
    name: "say"
}
