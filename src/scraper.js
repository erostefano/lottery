const axios = require('axios');
const cheerio = require('cheerio');

downloadDraws = async (lotto, numbers, stars) => {
    const response = await axios.get('https://www.swisslos.ch/de/euromillions/information/gewinnzahlen/gewinnzahlen-quoten.html');
    const $ = cheerio.load(response.data);

    const draw = $('body > div.page > div.container > div > div.main > main > div.game-instructions > div:nth-child(3) > div.filter-results > div:nth-child(1) > div.actual-numbers___body');

    draw.children().each((i, el) => {
      $()
    })

}

downloadDraws('EuroMillion', 5, 2);
