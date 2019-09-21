const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.mentions.users.size) {
    let avatar = message.member.displayAvatarURL;
    let userimage = new Discord.RichEmbed()
    .setAuthor('Avatar', '${avatar}')
    .setColor("#980aab")
    .setImage(message.member.displayAvatarURL)
    return message.channel.send(userimage);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	};
    

module.exports.help = {
    name: "avatar"
}

		
