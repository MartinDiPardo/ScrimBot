module.exports = exports = {
  name: 'invite',
  usage: '',
  enabled: false,
  process: async (message, GLOBALS) => {
    const embed = new GLOBALS.Embed()
      .setTitle('Add me to your server!')
      .setURL('https://discord.com/oauth2/authorize?client_id=715030981894995998&scope=bot&permissions=8')
    message.reply(embed)
  }
}