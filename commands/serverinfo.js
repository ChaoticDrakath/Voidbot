const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
           
if(message.member.hasPermission(["MANAGE_MESSAGES"])){

            let sicon = message.guild.iconURL;
            let serverembed = new Discord.RichEmbed()
            .setDescription("Server Info")
            .setColor("#980aab")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("Your join date", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount);
        
            return message.channel.send(serverembed);
           }
}

module.exports.help = {
    name: "serverinfo"
}
