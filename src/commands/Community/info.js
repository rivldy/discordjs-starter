const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or server.')
    .addSubcommand(subcommand =>
      subcommand.setName('user')
        .setDescription('Info about a user.')
        .addUserOption(option => option.setName('target').setDescription('The user.'))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('server')
        .setDescription('Info about the server.')
    ),
    async execute(interaction, client) {
      const subcommand = interaction.options.getSubcommand();
      const target = interaction.options.getUser('target') || interaction.user;

      if(subcommand === 'user') {
        await interaction.reply({ content: `${target.username} | ${target.id}` });
      }

      if(subcommand === 'server') {
        await interaction.reply({ content: `${interaction.guild.name} | ${interaction.guild.id}` });
      }
    }
}
