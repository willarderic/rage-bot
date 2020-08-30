
const handleAndy = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[1]) {
      case 'fuck':
        dispatcher = connection.play('./Andy/FUCCKK.mp3')
        break
      case 'gameover':
        dispatcher = connection.play('./Andy/game_over_holy_shit.mp3')
        break
      case 'boosted':
        dispatcher = connection.play('./Andy/got_some_boosted_retards.mp3')
        break
      case 'zyra':
        dispatcher = connection.play('./Andy/holy_shit_zyra_why.mp3')
        break
      case 'stroke':
        dispatcher = connection.play('./Andy/im_having_a_stroke_right_now.mp3')
        break
      case 'cool':
        dispatcher = connection.play('./Andy/thats_so_cool_cool_gameplay_team.mp3')
        break
      case 'retarded':
        dispatcher = connection.play('./Andy/this_game_fuckin_retarded.mp3')
        break
      case 'hard':
        dispatcher = connection.play('./Andy/this_games_so_hard.mp3')
        break
      case 'udyr':
        dispatcher = connection.play('./Andy/udyr_huh_thats_annoying.mp3')
        break
      case 'done':
        dispatcher = connection.play('./Andy/well_this_games_done.mp3')
        break
      case 'shitty':
        dispatcher = connection.play('./Andy/youre_fuckign_shitty_at_the_game_dude_wtf.mp3')
        break
      default:
        console.log(messageParts[1] + ' is not a valid command')
        break
    }
    dispatcher.on("end", end => {
      voiceChannel.leave()
    })
  }).catch((err) => console.log(err))
}

const handleMatt = (voiceChannel, messageParts) => {
    voiceChannel.join().then(connection => {
      let dispatcher
      switch (messageParts[1]) {
        case 'hi':
          dispatcher = connection.play('./Matt/Matt_hijustine.mp3')
          break
        case 'haha':
          dispatcher = connection.play('./Matt/Matt_HAHAHAHA.mp3')
          break
        case 'ping':
          dispatcher = connection.play('./Matt/Matt_pingwonthelp_listentowords.mp3')
          break
        case 'right':
          dispatcher = connection.play('./Matt/Matt_totheright.mp3')
          break
        default:
          console.log(messageParts[1] + ' is not a valid command')
          break
      }
      dispatcher.on("end", end => {
        voiceChannel.leave()
      })
    }).catch((err) => console.log(err))
}

const handleNoah = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[1]) {
      case 'ohgod':
        dispatcher = connection.play('./Noah/noah_ohgod.mp3')
        break
      default:
        console.log(messageParts[1] + ' is not a valid command')
        break
    }
    dispatcher.on("end", end => {
      voiceChannel.leave()
    })
  }).catch((err) => console.log(err))
}

const handleCaleb = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[1]) {
      case laugh:
        dispatcher = connection.play('./Caleb/laugh.mp3')
        break
      default:
        console.log(messageParts[1] + ' is not a valid command')
        break
    }
    dispatcher.on("end", end => {
      voiceChannel.leave()
    })
  }).catch((err) => console.log(err))
}

const handleBoys = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[1]) {
      case 'warm':
        dispatcher = connection.play('./Boys/warm.mp3')
        break
      default:
        console.log(messageParts[1] + ' is not a valid command')
        break
    }
    dispatcher.on("end", end => {
      voiceChannel.leave()
    })
  }).catch((err) => console.log(err))
}

const common = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[0]) {
      case 'bongrip':
        dispatcher = connection.play('./Common/bongrip.mp3')
        break
      case 'lightup':
        dispatcher = connection.play('./Common/lighting_up.mp3')
        break
    }
    dispatcher.on("end", end => {
      voiceChannel.leave()
    })
  }).catch((err) => console.log(err))
}

module.exports = {
  handleAndy,
  handleMatt,
  handleNoah,
  handleCaleb,
  handleBoys,
  common
}