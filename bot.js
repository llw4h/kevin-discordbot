//discord test bot for server
console.log("beep! boop! 🤖")

require("dotenv").config();

//import fetch from 'node-fetch'
const fetch = require('node-fetch');
//import keepAlive from './server'
const keepAlive = require('./server');
//import Discord from 'discord.js'
const Discord = require('discord.js');
const cron = require('cron');
const { Client, Intents } = require('discord.js');
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS);

//import DiscordJS, { Intents } from 'discord.js'
//import dotenv from 'dotenv'

const client = new Discord.Client({ intents: myIntents });
//event handler
//client.on('ready', readyDiscord);
//function readyDiscord(){
//  console.log('✨');
//}
client.on('ready', () => {
  console.log('✨');
});

//test
client.on('messageCreate', (message) => {
  if (message.content === 'movie night?' || message.content === 'Movie night?'){
    //message.reply({
      //content: 'pong!!!',
    //})
    message.react('908566671457943552');
    message.react('908566711870046300');
  } 
})

//movie announcement
let scheduledMessage = new cron.CronJob('00 00 10 * * 5,6,0', () => {
  const guild = client.guilds.cache.get('756772478235181126');
  const channel = guild.channels.cache.get('765894451025150003');
  channel.send(`<@&${'759746575550513163'}> Anyone up for movie night?`);
  message.react('908566671457943552');
  message.react('908566711870046300');
});

// When you want to start it, use:
scheduledMessage.start()

client.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get('798436413531881473').send(`<@${guildMember.user.id}> has joined the server!`);
});
client.on('guildMemberRemove', guildMember => {
    guildMember.guild.channels.cache.get('798436413531881473').send(`<@${guildMember.user.id}> has left the server!`);
});


//poll
const { poll } = require('discord.js-poll');
module.exports = {
  name: 'poll',
  description: 'Create a poll',
  usage: 'Title + Option 1 + Option 2 + Option 3 + etc',
  execute(client, message, args) {
    poll(message, args, '+', '#00D1CD');
    console.log('🤖');
  },
};
//client.setMaxListeners(0)
keepAlive();
client.login(process.env.BOTTOKEN);