const Discord = require('discord.js')
const bot = new Discord.Client()
const dotenv = require('dotenv')
const fs = require('fs')
const ytdl = require('ytdl-core')

// Get api key from environment variables
dotenv.config()

// prefix for commands
const prefix = '!'

// boolean to block overlapping calls
let isReady, commandMap, commonAudioCommands

async function getAudioCommands(path) {
  const dir = await fs.promises.opendir(path)
  const commandMap = {}
  const commonAudioCommands = []
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      commandMap[dirent.name] = []
      const subdir = await fs.promises.opendir(`${path}/${dirent.name}`)
      for await (const subdirent of subdir) {
        commandMap[dirent.name].push(subdirent.name.split('.')[0])
      }
    } else {
      commonAudioCommands.push(dirent.name.split('.')[0])
    }
  }
  return [commandMap, commonAudioCommands]
}

bot.on('ready', async () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  isReady = true
  commandLists = await getAudioCommands('./audio').catch(console.error)
  commandMap = commandLists[0]
  commonAudioCommands = commandLists[1]
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
        let dispatcher
        if (Object.keys(commandMap).includes(messageParts[0])) {
          if (messageParts[1] === 'help') {
            msg.channel.send('Commands for ' + messageParts[0] + ' are: ' + commandMap[messageParts[0]].join(', '))
          } else {
            const connection = await voiceChannel.join()
            dispatcher = connection.play(`./audio/${messageParts[0]}/${messageParts[1]}.mp3`)
          }
        } else if (commonAudioCommands.includes(messageParts[0])) {
          const connection = await voiceChannel.join()
          dispatcher = connection.play(`./audio/${messageParts[0]}.mp3`)
        } else if (messageParts[0] === 'help') {
          msg.channel.send('Common commands are: ' + commonAudioCommands.join(', '))
          for (const key of Object.keys(commandMap)) {
            msg.channel.send(`Commands for ${key} are: ` + commandMap[key].join(', '))
          }
        } else if (messageParts[0] === 'play') {
          if (messageParts[0] && ytdl.validateURL(messageParts[1])) {
            const connection = await voiceChannel.join()
            dispater = connection.play(ytdl(messageParts[1], { filter: 'audioonly' }), { seek: 0, volume: 0.1 })
          } else {
            msg.channel.send('Not a valid youtube url')
          }
        } else {
          console.log('Did not recognize command ' + messageParts)
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