
const handleAndy = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[1]) {
      case 'fuck':
        dispatcher = connection.play('./andy/FUCCKK.mp3')
        break
      case 'gameover':
        dispatcher = connection.play('./andy/game_over_holy_shit.mp3')
        break
      case 'boosted':
        dispatcher = connection.play('./andy/got_some_boosted_retards.mp3')
        break
      case 'zyra':
        dispatcher = connection.play('./andy/holy_shit_zyra_why.mp3')
        break
      case 'stroke':
        dispatcher = connection.play('./andy/im_having_a_stroke_right_now.mp3')
        break
      case 'cool':
        dispatcher = connection.play('./andy/thats_so_cool_cool_gameplay_team.mp3')
        break
      case 'retarded':
        dispatcher = connection.play('./andy/this_game_fuckin_retarded.mp3')
        break
      case 'hard':
        dispatcher = connection.play('./andy/this_games_so_hard.mp3')
        break
      case 'udyr':
        dispatcher = connection.play('./andy/udyr_huh_thats_annoying.mp3')
        break
      case 'done':
        dispatcher = connection.play('./andy/well_this_games_done.mp3')
        break
      case 'shitty':
        dispatcher = connection.play('./andy/youre_fuckign_shitty_at_the_game_dude_wtf.mp3')
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
          dispatcher = connection.play('./matt/Matt_hijustine.mp3')
          break
        case 'haha':
          dispatcher = connection.play('./matt/Matt_HAHAHAHA.mp3')
          break
        case 'ping':
          dispatcher = connection.play('./matt/Matt_pingwonthelp_listentowords.mp3')
          break
        case 'right':
          dispatcher = connection.play('./matt/Matt_totheright.mp3')
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
        dispatcher = connection.play('./noah/noah_ohgod.mp3')
        break
      case 'communists':
        dispatcher = connection.play('./noah/communists.mp3')
        break
      case 'fuckthisgame':
        dispatcher = connection.play('./noah/fuckthisgame.mp3')
        break
      case 'moan':
        dispatcher = connection.play('./noah/moan.mp3')
        break
      case 'shot':
        dispatcher = connection.play('./noah/shot.mp3')
        break
      case 'why':
        dispatcher = connection.play('./noah/why.mp3')
        break
      case 'holes':
        dispatcher = connection.play('./noah/littleholes.mp3')
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
      case 'laugh':
        dispatcher = connection.play('./caleb/laugh.mp3')
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

const handleHayden = (voiceChannel, messageParts) => {
  voiceChannel.join().then(connection => {
    let dispatcher
    switch (messageParts[1]) {
      case 'pp':
        dispatcher = connection.play('./hayden/pp.mp3')
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
        dispatcher = connection.play('./boys/warm.mp3')
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
        dispatcher = connection.play('./common/bongrip.mp3')
        break
      case 'lightup':
        dispatcher = connection.play('./common/lighting_up.mp3')
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
  handleHayden,
  handleBoys,
  common
}
