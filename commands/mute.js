const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("KICK_MEMBERS", "BAN_MEMBERS")) {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Please provide a reason!");

  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#82411b",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }
  let bicon = client.user.displayAvatarURL;
  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executed by ${message.author}`)
  .setThumbnail(bicon)
  .setColor("#980aab")
  .addField("Muted User", tomute)
  .addField("Muted in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Length", mutetime)
  .addField("Reason", reason);

  let channel = message.guild.channels.find(c => c.name === "bot-logs");
  if(!channel) return message.reply("Please create a incidents channel first!");
  channel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
  }, ms(mutetime));

}else message .channel.send("You don't have required permissions to access this command!");
//end of module
}

module.exports.help = {
  name: "mute"
}
