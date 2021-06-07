const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log("Connected as " + client.user.tag);

    client.user.setActivity("dipshits", {type: "WATCHING"});
    
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
        })
    })

    let genChannel = client.channels.cache.get("743154526672125955");
    genChannel.send("Hello, friends");
})
//gen test id: 743154526672125955
client.login(/*input bot token*/);

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user){
        return;
    }
    if (receivedMessage.content.startsWith("!")){
        processCommand(receivedMessage);
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if (primaryCommand == "roll"){
        receivedMessage.channel.send(rollCommand(arguments));
    } else {
        receivedMessage.channel.send("Unknown command. Stop sucking.");
    }
}

function rollCommand(arguments){
    if (arguments == "d20"){
        return Math.ceil(Math.random() * 20)
    } else if (arguments == "d12"){
        return Math.ceil(Math.random() * 12)
    } else if (arguments == "d10"){
        return Math.ceil(Math.random() * 10)
    } else if (arguments == "d8"){
        return Math.ceil(Math.random() * 8)
    } else if (arguments == "d6"){
        return Math.ceil(Math.random() * 6)
    } else if (arguments == "d4"){
        return Math.ceil(Math.random() * 4)
    }else if (arguments == "a coin" || arguments == "coin"){
        return Math.ceil(Math.random() * 2)
    } else {
        return Math.ceil(Math.random() * 6)
    }
}



