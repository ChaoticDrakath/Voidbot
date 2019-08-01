const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.author.id = "471988330335174667") return message.channel.send("You're my commander!")
    
    try {
        await message.channel.send("Voidguard is going offduty!")
        process.exit()      
    } catch(e) {
        message.channel.send("ERROR: ${e.message}")
    }
    
}

module.exports.help = {
    name: "shutdown"
}
