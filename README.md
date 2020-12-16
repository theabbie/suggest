# AutoSuggest APIs

![Autosuggestion APIs](https://user-images.githubusercontent.com/17960677/100518437-782e2b80-31b7-11eb-9dac-c85327e857c2.png)

>**Google, Duckduckgo, Bing, Qwant and other autosuggestion APIs**

## Example

The Following Code snipet will help you understand how to use this.

```js
var Suggest = require("node-suggest");

(async function() {
  await Suggest.google("How to");
  await Suggest.ddg("How to");
  await Suggest.bing("How to");
  await Suggest.qwant("How to");
  await Suggest.yahoo("How to");
  await Suggest.startpage("How to");
  await Suggest.dogpile("How to");
  await Suggest.swisscows("How to");
  await Suggest.ask("How to");
})();
```

It also has a `Suggest.all()` method which combines all results together, Sample output will be ass follows:

```js
[
  "how to screenshot on mac",
  "how to take a screenshot",
  "how to take a screenshot on a chromebook",
  "how to screenshot on chromebook",
  "how to train your dragon",
  "how to delete instagram",
  "how to pronounce",
  "how to make french toast",
  "how to draw",
  "how to lose weight fast",
  "how to screenshot",
  "how to get help in windows 10",
  "how to play chess",
  "how to make slime",
  "how to cook a turkey",
  "how to make money online",
  "how to write a letter",
  "how to download google play",
  "how to get free robux",
  "how to",
  "how to delete instagram account",
  "how to delete facebook",
  "how to create firewall rule",
  "how to brine a turkey",
  "how to kiss",
  "how to lose weight",
  "how to download youtube videos",
  "how to make cake",
  "how to take screenshot in laptop",
  "how to get pregnant",
  "how to tie a tie",
  "how to make paper flowers",
  "how to win friends and influence people",
  "how to lose a guy in 10 days",
  "how to marry a millionaire",
  "how to save a life",
  "how to succeed in business without really trying",
  "how to make an american quilt",
  "how to make love to a woman",
  "how to rap",
  "how to eat fried worms",
  "how tall is mt everest?",
  "how the west was won, 1962",
  "how to draw manga",
  "how the west was won, film 1962",
  "how to become cfo",
  "how to install whatsapp on pc",
  "how to turn off pop up blockers",
  "how to solve this equation",
  "how to pay vehicle tax online",
  "how to care for orchid plants",
  "how to file gst return",
  "how to find artist of painting",
  "how to lower your colestrol",
  "how to calculate sq ft",
  "how to restore thinning hair"
]
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Cheerio (For parsing Google suggest XML)

## Credits

* Google
* DuckDuckGo
* Bing
* Qwant
* Yahoo
* Startpage
* Dogpile
* Swisscows
* Ask.com

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information

