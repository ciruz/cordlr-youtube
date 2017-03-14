# cordlr-youtube

> Cordlr Plugin to search for videos on [YouTube](https://www.youtube.com/).

## Installation

You can install **cordlr-youtube** as a npm package via:

``npm install cordlr-youtube --save``

Now append your ``corldr.json`` file, and add ``cordlr-youtube`` as a new plugin that Cordlr can load it.

```javascript
// cordlr.json:

{
  "token":"YourTokenHere",
  "prefix":"!",
  "loader":"cordlr-loader",
  "plugins":[
    // ...
    "cordlr-help2",
    "cordlr-youtube" // add this
  ]
}
```

## Configuration

Since this plugin is using the official YouTube API a free API key from [Google Developer Console](https://console.developers.google.com/) is needed. ([How To Video](https://www.youtube.com/watch?v=_HYYJelTExE&t=27s))


```javascript
// cordlr.json

{
  "token":"YourTokenHere",
  "prefix":"!",
  "loader":"cordlr-loader",
  "plugins":[
    // ...
    "cordlr-help2",
    "cordlr-youtube"
  ],
  "cordlr-youtube": { // add this
    "apiKey": "YOUR-YOUTUBE-API-KEY" // set your API key here
  }
}
```

## Usage

Search for a video on YouTube:

``!yt <search term>``

**Example Usage:** ``!yt daft punk``


## License

MIT © [ciruz](https://github.com/ciruz)