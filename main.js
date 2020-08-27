const Discord = require('discord.js')
const bot = new Discord.Client()

const prefix = '!'

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
});

bot.on('message', (msg) => {
  let isReady = true
  if (msg.content && msg.content[0] === prefix) {
    messageParts = msg.content.slice(1).split(' ')

    if (isReady) {
      isReady = false
      let voiceChannel = msg.member.voice.channel

      if (!voiceChannel) {
        console.log('User not in a voice channel, cannot use commands')
        return
      }

      switch (messageParts[0]) {
        case 'andy':
          handleAndy(voiceChannel, messageParts)
          break
        case 'matt':
          handleMatt(voiceChannel, messageParts)
          break
      }      
    }
  }
})

bot.login('')