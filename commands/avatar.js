const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.mentions.users.size) {
    let userimage = new Discord.RichEmbed()
    .setAuthor('Your avatar:', message.author.displayAvatarURL)
    .setColor("#980aab")
    .setImage(message.author.displayAvatarURL)
    return message.channel.send(userimage);
		}

    let avatarList = message.mentions.users.map(user => {
    let tagimage = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s avatar:`, user.displayAvatarURL)
    .setColor("#980aab")
    .setImage(user.displayAvatarURL)
    return message.channel.send(tagimage);
		});

	};
    

module.exports.help = {
    name: "avatar"
}

		
