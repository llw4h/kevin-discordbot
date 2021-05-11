console.log("beep! boop! 🤖")

require("dotenv").config();

const fetch = require('node-fetch');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

//event handler
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('✨');
}

const replies = [
    'How may I serve you, master?',
    'Good day!!',
    "Hello, I'm a bot made by Lulu 🤖",
    "I exist to serve. Beep Boop Beep."
]

client.on('message', gotMessage);

async function gotMessage(msg){
    console.log(msg.content);
    if (msg.content == 'bot stop dos'){
        msg.channel.send('@dos STOP DOS 🤺 STOP 🤺✋');
    }

    else if(msg.content == 'rick roll me'){
        let url = `https://g.tenor.com/v1/search?q=nevergonnagiveyouup&key=${process.env.TENORKEY}&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }

    // channel id is #bot-testing
    else if (msg.channel.id == '841478585574490163' &&  msg.content == 'hello handy'){
        const i = Math.floor(Math.random() * replies.length);
        msg.reply(replies[i]);
    }

    else if (msg.content == 'bye handy'){
        msg.reply("Of course, of course! Don't let me keep you!");
    }

    else if (msg.content == 'bot who is your creator'){
        msg.reply('The almighty Lulu ✨✨');
    }

    else if (msg.content == 'good bot'){
        msg.channel.send('💖');
    }

    else if (msg.content == 'bad bot'){
        msg.channel.send('🤖✋');
    }
}