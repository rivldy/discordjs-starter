const { Client, GatewayIntentBits, Collection, Events, PermissionsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();
require('dotenv').config();
const fs = require('fs');

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync('./src/commands');
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));


(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, './src/events');
    client.handleCommands(commandFolders, './src/commands');
    client.login(process.env.TOKEN);
})();
