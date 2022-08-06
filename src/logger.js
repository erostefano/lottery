exports.log = (description, sheets, draws) => {
    console.group(description);

    draws.forEach(draw => {
        console.group(`${draw.date.getDate()}.${draw.date.getMonth() + 1}.${draw.date.getUTCFullYear()}`);
        console.log(`Numbers: ${draw.numbers.join(' ')} Stars: ${draw.stars.join(' ')} \n`);

        sheets.forEach(
            sheet => {
                console.log(
                    'Numbers:',
                    sheet.numbers.join(' '),
                    'Stars:',
                    sheet.stars.join(' ')
                );
                console.log(
                    '        ',
                    sheet.numbers.map(number => {
                        const underlines = [...number.toString()].map(_ => '_').join('');
                        const spaces = [...number.toString()].map(_ => ' ').join('');

                        return draw.numbers.includes(number) ? underlines : spaces;
                    }).join(' '),
                    '      ',
                    sheet.stars.map(star => {
                        return draw.stars.includes(star) ? '_' : ' '
                    }).join(' ')
                );
                console.log();
            }
        )
        console.groupEnd();
    })
    console.groupEnd();
}
