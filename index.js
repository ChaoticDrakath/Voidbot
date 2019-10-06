const { Discord, Client, Collection } = require("discord.js");
const { prefix, token } = require('./config.json');
const fs = require("fs");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });

});


client.once('ready', () => {
    console.log(`${client.user.username}, at your service!`)
    client.user.setActivity("Vhelp", {type: "STREAMING"});
})

client.on("guildCreate", guild => {
   guild.owner.send('Thanks for adding me to your  server!\nYou can use `Vhelp` to discover commands.')
   console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
   

})

client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "New Recruits"));
   console.log(`Gave joinrole to ${guildMember}`);
})

client.login(process.env.token);
