const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.author.id = "471988330335174667") {
    
    try {
        await message.channel.send("Voidguard is going offduty!")
        client.destroy()      
    } catch(e) {
        message.channel.send("ERROR: ${e.message}")
    }
    
}
}

module.exports.help = {
    name: "shutdown"
}
