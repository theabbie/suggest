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
  ask: "https://amg-ss.ask.com/query?q=",
  brave: "https://search.brave.com/api/suggest?q=",
  // see: https://forum.vivaldi.net/topic/16991/guide-search-suggestion-url
  ecosia: "https://ac.ecosia.org/autocomplete?q=", // Ecosia API endpoint
  wikipedia: "https://en.wikipedia.org/w/api.php?action=opensearch&search=",
  finn: "https://www.finn.no/search/autocomplete/xhr?responseType=json&searchKey=SEARCH_ID_BAP_ALL&term=",
  // TODO #7
  //you: "https://you.com/api/ac?q=", // #7: cloudflare
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
    var op = await axios(urls.yahoo + q);
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
    return op.data[1];
  }

  static async brave(q) {
    var op = await axios(urls.brave + q);
    return op.data[1];
  }

  static async ecosia(q) {
    var op = await axios(urls.ecosia + q);
    return op.data.suggestions;
  }

  static async wikipedia(q) {
    var op = await axios(urls.wikipedia + q);
    return op.data[1]; // [3] has the links
  }

  static async finn(q) {
    var op = await axios(urls.finn + q);
    return op.data.map(x=>x.suggest);
  }

  //static async you(q) {
  //  var op = await axios(urls.you + q, options);
  //  return op.data[1] // FIXME needs cloudflare circumvention
  //}

  static async all(q) {
    var all = [
      ...await Suggest.google(q),
      ...await Suggest.ddg(q),
      ...await Suggest.bing(q),
      ...await Suggest.qwant(q),
      ...await Suggest.yahoo(q),
      ...await Suggest.startpage(q),
      ...await Suggest.dogpile(q),
      ...await Suggest.swisscows(q),
      ...await Suggest.ask(q),
      ...await Suggest.brave(q),
      ...await Suggest.ecosia(q),
      ...await Suggest.wikipedia(q),
      ...await Suggest.finn(q),
      //...await Suggest.you(q),
    ];
    return [...new Set(all)];
  }
}
