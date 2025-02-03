module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if(!interaction.isButton()) return;

    if(interaction.customId === 'custom_button') {
        interaction.reply('Custom button clicked!');
    }

  }
}
