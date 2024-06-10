const { Client } = require('discord.js') // eslint-disable-line no-unused-vars

module.exports = {
  name: 'ready',
  once: true,
  /**
   * @param { Client } client
   */
  async execute (client) {
    console.log(`Ready! Logged in as ${client.user.tag}`)
  }
}
