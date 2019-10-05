const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.users.first() || message.author;
    const joinDiscord = moment(member.createdAt).format('llll');
    const joinServer = moment(member.joinedAt).format('llll');
    let embed = new Discord.RichEmbed()
        .setAuthor(member..username + '#' + member.discriminator, member..displayAvatarURL)
        .setDescription(`${member}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${member..displayAvatarURL}`)
        .addField('Joined at:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Status:', member.presence.status, true)
        .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: 'userinfo'
}
