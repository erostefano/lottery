exports.log = (description, sheets, draws) => {
    console.group(description);

    draws.forEach(draw => {
        console.group(draw.date.toUTCString());

        sheets.forEach(
            play => {
                console.log(
                    'Numbers:',
                    draw.numbers.join(' '),
                    'Stars:',
                    draw.stars.join(' ')
                );
                console.log(
                    'Numbers:',
                    draw.numbers.map(number => {
                        const underlines = [...number.toString()].map(_ => '_').join('');
                        const spaces = [...number.toString()].map(_ => ' ').join('');

                        return play.numbers.includes(number) ? underlines : spaces;
                    }).join(' '),
                    'Stars:',
                    draw.stars.map(star => {
                        return play.stars.includes(star) ? '_' : ' '
                    }).join(' ')
                );
                console.log();
            }
        )
        console.groupEnd();
    })
    console.groupEnd();
}