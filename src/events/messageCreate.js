const { PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'messageCreate',
  async execute (message, client) {
    const prefix = '!';
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.reply({ content: 'Pong!' });
    }
  }
}
