const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();


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
    client.user.setActivity("Rules!", {type: "STREAMING"});
})

client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
    console.log(`${message.author.tag}(ID:${message.author.id}): ${message.content}`);

   

})

client.login(token);