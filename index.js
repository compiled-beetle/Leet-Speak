#!/usr/bin/env node

const { program } = require('commander');

const encodeLeet = (string, level) => {
    console.log('encoding ...');
};

const decodeLeet = (string, level) => {
    console.log('decoding ...');
};

program
    .option('-l, --level <level>', 'leet Speak complexity level (1, 2, or 3)')
    .option('-e, --encode', 'encode the input string')
    .option('-d, --decode', 'decode the input string')
    .option('-s, --string <string>', 'input string to encode or decode')
    .parse(process.argv);

program.on('--help', () => {
    console.log('');
    console.log('-l, --level <level>', 'leet Speak complexity level (1, 2, or 3)');
    console.log('-e, --encode', 'encode the input string');
    console.log('-d, --decode', 'decode the input string');
    console.log('-s, --string <string>', 'input string to encode or decode');
    console.log('');
    console.log('examples:');
    console.log('  $ leet -l 1 -e -s "hello"');
    console.log('  $ leet -l 2 -d -s "h3ll0"');
});

const { level, encode, decode, string } = program;

if (!level || (!encode && !decode) || !string) {
    console.error('invalid command. provide correct the arguments.');
} else {
    if ((encode && decode) || (!encode && !decode)) {
        console.error('invalid command. Please provide either -e || --encode or -d || --decode.');
        console.log('use -h || --help for usage information.');
    } else {
        if (isNaN(parseInt(level)) || parseInt(level) < 1 || parseInt(level) > 3) {
            console.error('invalid level. Please provide a number (1, 2, or 3)');
            console.log('use -h || --help for usage information.');
        } else {
            if (encode) {
                const encodedString = encodeLeet(string, level);
                console.log('encoded:', encodedString);
            }

            if (decode) {
                const decodedString = decodeLeet(string, level);
                console.log('decoded:', decodedString);
            }
        }
    }
}
