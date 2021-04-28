const Discord = require("discord.js");
const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = 0

client.on("ready", () => {
    console.log("Prout Prout !");
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'douanes');
    if (!channel) return;
    channel.send(`${member.user} : PROUT !`);
    

});

client.on("message", msg => {
    if (msg.author.username != "Kaian"){
    if (msg.content.match(/Guerre/i)) {
        msg.reply("Prout !");
        }
    

    if (msg.content.match(/Baston/i)) {
        msg.reply("Prout !");
     }

    if (msg.content.match(/Prout/i)) {
        msg.reply("Prout !");
     }
    

    if (msg.content.match(/Paix/i)) {
        msg.reply("Prout !");
    }

    if (msg.mentions.has(client.user)) {
        msg.reply('Prout ?');
    }}
});

//let port = process.env.PORT || 5000;
//client.listen(process.env.PORT, '0.0.0.0')
//var port = process.env.PORT || 8080

let port = process.env.PORT || 8080;

client.listen(port, ()=>{
    console.log(`client running on ${port}`);

client.login(process.env.TOKEN);
//client.login("");
