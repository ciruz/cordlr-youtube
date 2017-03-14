const CordlrPlugin = require('cordlr-plugin')

const YouTube = require('youtube-node')

class YoutubePlugin extends CordlrPlugin {
  constructor(bot, config) {
    super(bot, config)

    this.bot = bot
    this.config = config

    this.name = 'YouTube'
    this.description = 'Search for videos on YouTube'

    this.commands = {
      "yt": {
        "usage": "<search term>",
        "function": "searchVideo",
        "description": "Search for a video on YouTube by search term",
        "permissions": []
      },
    }

    this.resolveConfiguration()
  }

  resolveConfiguration() {
    this.pluginConfig = this.config['cordlr-youtube'] || {}

    if (this.pluginConfig.apiKey === undefined)
      throw new Error('No YouTube API Key in configuration defined')
  }

  searchVideo(message, args, flags) {
    let searchTerm = args.join(' ')

    let youTube = new YouTube()
    youTube.setKey(this.pluginConfig.apiKey)

    youTube.search(searchTerm, 1, (err, result) => {
      if (err) {
        this.sendInfo(message, err, 'YouTube', null, 'error')
      } else {
        if (result.items.length > 0) {
          message.channel.sendMessage('https://www.youtube.com/watch?v=' + result.items[0].id.videoId)
        } else {
          this.sendInfo(message, `No results on YouTube for **${searchTerm}**.`, 'YouTube', null, 'error')
        }
      }
    })
  }
}

module.exports = YoutubePlugin