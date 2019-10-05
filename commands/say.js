const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const userID = '<@471988330335174667>'
    if(!message.author === userID) {
    if(message.member.hasPermission(["ADMINISTRATOR"])){

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
}}}

module.exports.help = {
    name: "say"
}
