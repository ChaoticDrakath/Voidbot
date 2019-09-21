const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	};
    

module.exports.help = {
    name: "avatar"
}

		
