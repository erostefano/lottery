const logger = require('./logger')

let compare;
let draws;

// EuroMillion

compare = [{
    numbers: [23, 30, 32, 39, 44], stars: [6, 7]
}];

draws = [{
    date: new Date('2022-08-05'), numbers: [3, 29, 33, 35, 44], stars: [8, 10]
}];

console.log('EuroMillion');
console.log();
logger.log(compare, draws);

// SwissLotto

compare = [
    {numbers: [4, 8, 14, 15, 21, 33], stars: [5]},
    {numbers: [5, 14, 27, 31, 35, 36], stars: [4]}
];

draws = [{
    date: new Date('2022-08-03'), numbers: [15, 17, 21, 27, 35, 38], stars: [6]
}];

console.log('SwissLotto');
console.log();
logger.log(compare, draws);
