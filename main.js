const Discord = require('discord.js')
const bot = new Discord.Client()
const dotenv = require('dotenv')
const commands = require('./commands')

// Get api key from environment variables
dotenv.config()

// prefix for commands
const prefix = '!'

// boolean to block overlapping calls
let isReady

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  isReady = true
});

bot.on('message', async (msg) => {
  // Check if the message is a command
  if (msg.content && msg.content[0] === prefix) {
    messageParts = msg.content.slice(1).split(' ')

    if (isReady) {
      isReady = false
      // get the correct voice channel
      const voiceChannel = msg.member.voice.channel

      if (voiceChannel) {
        switch (messageParts[0]) {
          case 'andy':
            commands.handleAndy(voiceChannel, messageParts)
            break
          case 'matt':
            commands.handleMatt(voiceChannel, messageParts)
            break
          case 'noah':
            commands.handleNoah(voiceChannel, messageParts)
            break
          default:
            commands.common(voiceChannel, messageParts)
            break
        }
      } else {
        const textChannel = msg.channel
        await textChannel.send('You are not in a voice channel')
      }

      isReady = true
    }
  }
})

bot.login(process.env.API_KEY)