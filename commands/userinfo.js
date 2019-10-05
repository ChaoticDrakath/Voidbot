const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (client, message, args) => {
        
        if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Member information:', stripIndents`**> Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)

            .addField('User information:', stripIndents`**> ID:** ${member.user.id}
            **> Username**: ${member.user.username}
            **> Tag**: ${member.user.tag}
            **> Created at**: ${created}`, true)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }else message .channel send("You don't have required permissions to access this command!");
}

module.exports.help = {
    name: "userinfo"
}
