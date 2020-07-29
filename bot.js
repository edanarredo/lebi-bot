const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`); 
});

client.on('message', message => {
    if (message.content === 'lebi') {
        message.channel.send(':lebi: lebi.');
    }
    else if (message.content === 'send nudes') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Check me out here!')
        .setColor(0xff0000)
        .setDescription('https://github.com/edanarredo/lebi-bot');
        message.channel.send(embed);
    }

});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
})


client.login(`${BOT_TOKEN}`);
