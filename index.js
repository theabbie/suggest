var axios = require("axios");
var cheerio = require("cheerio");

var urls = {
  google: "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=",
  ddg: "https://duckduckgo.com/ac/?kl=wt-wt&q=",
  bing: "https://www.bingapis.com/api/v7/suggestions?appid=6D0A9B8C5100E9ECC7E11A104ADD76C10219804B&q=",
  qwant: "https://api.qwant.com/api/suggest/?client=opensearch&q=",
  yahoo: "https://api.search.yahoo.com/sugg/gossip/gossip-in-ura?output=sd1&command=",
  startpage: "https://www.startpage.com/do/suggest?query=",
  dogpile: "https://www.dogpile.com/suggestions?q=",
  swisscows: "https://swisscows.com/api/suggestion/suggest?query=",
  ask: "https://amg-ss.ask.com/query?q="
}

module.exports = class Suggest {
  constructor() {}
  
  static async google(q) {
    var xmlop = await axios(urls.google + q);
    var $ = cheerio.load(xmlop.data);
    return $("suggestion").toArray().map(x=>x.attribs.data);
  }

  static async ddg(q) {
    var op = await axios(urls.ddg + q);
    return op.data.map(x=>x.phrase);
  }

  static async bing(q) {
    var op = await axios(urls.bing + q);
    return op.data.suggestionGroups[0].searchSuggestions.map(x=>x.displayText);
  }

  static async qwant(q) {
    var op = await axios(urls.qwant + q);
    return [].concat.apply([], op.data);
  }

  static async yahoo(q) {
    var op = await axios(url.yahoo + q);
    return op.data.r.map(x=>x.k);
  }

  static async startpage(q) {
    var op = await axios(urls.startpage + q);
    op = op.data.split("\n");
    op.pop();
    return op;
  }

  static async dogpile(q) {
    var op = await axios(urls.dogpile + q);
    return op.data.suggestions.map(x=>x.text);
  }

  static async swisscows(q) {
    var op = await axios(urls.swisscows + q);
    return op.data;
  }

  static async ask(q) {
    var op = await axios(urls.ask + q);
    return op.data[1]
  }
}
