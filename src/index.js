const logger = require('./logger')

let sheets;
let draws;

// EuroMillion

sheets = [
    {numbers: ['23', '30', '32', '39', '44'], stars: ['06', '07']}
];

draws = [
    {date: new Date('2022-08-05'), numbers: ['03', '29', '33', '35', '44'], stars: ['08', '10']},
    {date: new Date('2022-08-09'), numbers: ['18', '19', '21', '27', '47'], stars: ['05', '11']},
    {date: new Date('2022-08-12'), numbers: ['14', '17', '34', '35', '42'], stars: ['06', '10']},
    {date: new Date('2022-08-16'), numbers: ['10', '14', '25', '32', '39'], stars: ['07', '08']},
    {date: new Date('2022-08-19'), numbers: ['02', '09', '13', '19', '38'], stars: ['02', '06']},
    {date: new Date('2022-08-23'), numbers: ['19', '26', '31', '39', '48'], stars: ['02', '03']},
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
        date: new Date('2022-08-06'), numbers: ['01', '02', '15', '18', '32', '40'], stars: ['06']
    },
    {
        date: new Date('2022-08-10'), numbers: ['03', '04', '05', '10', '21', '35'], stars: ['05'],
    },
    {
        date: new Date('2022-08-13'), numbers: ['07', '15', '18', '23', '32', '41'], stars: ['02'],
    },
    {
        date: new Date('2022-08-17'), numbers: ['07', '08', '16', '19', '28', '36'], stars: ['04'],
    },
    {
        date: new Date('2022-08-20'), numbers: ['01', '02', '07', '13', '28', '33'], stars: ['06'],
    },
];

logger.log('SwissLotto', sheets, draws);
