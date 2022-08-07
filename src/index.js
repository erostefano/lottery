const logger = require('./logger')

let sheets;
let draws;

// EuroMillion

sheets = [
    {numbers: ['23', '30', '32', '39', '44'], stars: ['06', '07']}
];

draws = [
    {date: new Date('2022-08-05'), numbers: ['03', '29', '33', '35', '44'], stars: ['08', '10']}
];

logger.log('EuroMillion', sheets, draws);

// SwissLotto

sheets = [
    {numbers: ['04', '08', '14', '15', '21', '33'], stars: ['05']},
    {numbers: ['05', '14', '27', '31', '35', '36'], stars: ['04']}
];

draws = [
    {
        date: new Date('2022-08-03'), numbers: ['15', '17', '21', '27', '35', '38'], stars: ['06']
    },
    {
        date: new Date('2022-08-06'), numbers: ['1', '2', '15', '18', '32', '40'], stars: ['06']
    }
];

logger.log('SwissLotto', sheets, draws);
