#!/usr/bin/env node

const { program } = require('commander');

const encodeLeet = (string, level) => {
    console.log('encoding ...');
};

const decodeLeet = (string, level) => {
    console.log('decoding ...');
};

program
    .option('-l, --level <level>', 'leet speak complexity level (1, 2, or 3)')
    .option('-e, --encode', 'encode the input string')
    .option('-d, --decode', 'decode the input string')
    .option('-s, --string <string>', 'input string to encode or decode')
    .parse(process.argv);

const helpInfo = `
Options:
  -l, --level <level>    leet speak complexity level (1, 2, or 3)
  -e, --encode           encode the input string
  -d, --decode           decode the input string
  -s, --string <string>  input string to encode or decode
  -h, --help             display help for command

Examples:
  npm start -- -l 1 -e -s "hello"
  npm start -- -l 2 -d -s "h3ll0"`;

program.on('--help', () => {
    console.log(helpInfo);
});

const { level, encode, decode, string } = program;

if (!level, (!encode && !decode) || !string) {
    console.error('invalid command. provide correct the arguments.');
    console.log(helpInfo);
} else {
    if ((encode && decode) || (!encode && !decode)) {
        console.error('invalid command. Please provide either -e, --encode or -d, --decode.');
        console.log(helpInfo);
    } else {
        if (isNaN(parseInt(level)) || parseInt(level) < 1 || parseInt(level) > 3) {
            console.error('invalid level. Please provide a number (1, 2, or 3)');
            console.log(helpInfo);
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
