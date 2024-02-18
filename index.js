#!/usr/bin/env node

const { program } = require('commander');

const leetAlphabet = {
    basic: {
        a: ['4'],
        e: ['3'],
        i: ['1'],
        o: ['0'],
        u: ['(_)']
    },
    intermediate: {
        a: ['4'],
        c: ['['],
        d: ['|)'],
        e: ['3'],
        g: ['6'],
        h: ['#'],
        i: ['1'],
        j: [']'],
        k: ['|<'],
        l: ['1'],
        m: ['/V\\'],
        n: ['|\\|'],
        o: ['0'],
        p: ['|>'],
        q: ['0_'],
        s: ['5'],
        t: ['7'],
        u: ['(_)'],
        v: ['\\/'],
        w: ['\\/\\/'],
        x: ['><'],
        z: ['2'],
        f: ['ph'],
        b: ['I3'],
        r: ['I2'],
        y: ['j']
    },
    advanced: {
        a: ['4', '@', '/\\'],
        c: ['[', '{', '<'],
        d: [')', '|)', '(|', '[)', '|>'],
        e: ['3', '&', 'ë'],
        g: ['&', '6', '9', '(_+', '(?,', '[,', '{,'],
        h: ['#', '/-/', '[-]', ']-[', ')-(,', '(-)', ':-:'],
        i: ['1', '[]', '|', '!', ']['],
        j: [', _|', '_|', '._|', '._]', '_]'],
        k: ['>|', '|<', '/<', '1<', '|(', '|{'],
        l: ['1', '7', '|_', '|'],
        n: ['^/', '|\\|', '/\\/', '[\\]', '<\\>', '{\\}'],
        o: ['(0)', '()', '[]', '<>'],
        p: ['|*', '|º', '|^', '|>', '|7'],
        q: ['(_,)', '9', '()_', '2', '0_', '<|', '&'],
        s: ['5', '$', '2'],
        t: ['7', '+', '-|-', "']['", '~|~'],
        v: ['\\/', '|/', '\\|'],
        w: ['\\/\\/', 'VV', '\\N', "'//", "\\\\'", '\\^/', '\\|/', '\\_|_/', '\\_:_/'],
        x: ['><', '}{', ')(', ']['],
        z: ['2', '7_', '-/_', '%'],
        m: ['/\\/\\', '/V\\', '[V]', '[]V[]', '|\\/|', '^^', '<\\/>', ']\\/['],
        f: ['ph', '|=_', '|#', '/='],
        b: ['I3', '8', '13', '|3', '!3', '(3'],
        r: ['I2', '2', '12', '|9', '|`', '/2'],
        y: ['j', "'/'", '7', '\\|/', '\\//'],
        u: ['(_)', '|_|', 'V', 'L|']
    },
    expert: {
        a: ['4', '@', '/\\', 'Д'],
        c: ['[', '{', '<', '©'],
        d: [')', '|)', '(|', '[)', '|>', '>', '|]', '|}'],
        e: ['3', '&', 'ë', '£', '€', '[-', '|=-'],
        g: ['&', '6', '9', '(_+', '(?,', '[,', '{,', 'gee'],
        h: ['#', '/-/', '[-]', ']-[', ')-(,', '(-)', ':-:', '1-1', '|+|'],
        i: ['1', '[]', '|', '!', '][', '!'],
        j: [', _|', '_|', '._|', '._]', '_]'],
        k: ['>|', '|<', '/<', '1<', '|(', '|{'],
        l: ['1', '7', '|_', '|', '£'],
        n: ['^/', '|\\|', '/\\/', '[\\]', '<\\>', '{\\}', 'И', 'ท'],
        o: ['(0)', '()', '[]', '<>', 'oh', 'Ø'],
        p: ['|*', '|º', '|^', '|>', '|7', '[]D'],
        q: ['(_,)', '9', '()_', '2', '0_', '<|', '&'],
        s: ['5', '$', '2', '§', 'ehs', 'es'],
        t: ['7', '+', '-|-', "']['", '~|~', '†'],
        v: ['\\/', '|/', '\\|'],
        w: ['\\/\\/', 'VV', '\\N', "'//", "\\\\'", '\\^/', '\\|/', '\\_|_/', '\\_:_/', 'Ш', 'Щ', 'พ', 'v²'],
        x: ['><', '}{', ')(', '][', '×', 'ecks'],
        z: ['2', '7_', '-/_', '%'],
        m: ['/\\/\\', '/V\\', '[V]', '[]V[]', '|\\/|', '^^', '<\\/>', ']\\/[', 'nn', '|T|', 'JTI'],
        f: ['ph', '|=_', '|#', '/=', 'v', 'ƒ'],
        b: ['I3', '8', '13', '|3', '!3', '(3', 'j3'],
        r: ['I2', '2', '12', '|9', '|`', '/2', '®', '[z', 'Я'],
        y: ['j', "'/'", '7', '\\|/', '\\//', '¥', 'Ч'],
        u: ['(_)', '|_|', 'V', 'L|', 'µ', 'บ']
    }
};

// const leetNumbers = {
//     numbers: {
//         1: ["L", "I"], "2": ["R", "Z"], "3": ["E"],
//         4: ["A"], "5": ["S"], "6": ["b", "G"],
//         7: ["T", "L"], "8": ["B"],
//         9: ["g", "q"], "0": ["o", "()"]
//     }
// };

program.name('leet-speak-cli').description('CLI tool to encode and decode leet-speak').version('0.0.1');

const encodeLeet = (string, level) => {
    string = string.toLowerCase();
    const leetMap = leetAlphabet[level];
    let encodedString = '';
    for (let char of string) {
        const replacements = leetMap[char];
        const replacement = replacements ? replacements[Math.floor(Math.random() * replacements.length)] : char;
        encodedString += replacement;
    }
    return encodedString;
};

const decodeLeet = (string, level) => {
    const leetMap = leetAlphabet[level];
    let decodedString = '';
    let index = 0;
    while (index < string.length) {
        let found = false;
        for (let key in leetMap) {
            if (leetMap.hasOwnProperty(key)) {
                const replacements = leetMap[key];
                for (let replacement of replacements) {
                    if (string.substr(index, replacement.length) === replacement) {
                        decodedString += key;
                        index += replacement.length;
                        found = true;
                        break;
                    }
                }
            }
            if (found) break;
        }
        if (!found) {
            decodedString += string[index];
            index++;
        }
    }
    return decodedString;
};

program
    .option('-l, --level <level>', 'leet-speak complexity level ("basic", "intermediate", "advanced", or "expert")')
    .option('-e, --encode', 'encode the input string')
    .option('-d, --decode', 'decode the input string')
    .option('-s, --string <string>', 'input string to encode or decode');

const helpInfo = `
Examples:
  npm start -- -l basic -e -s "hello"
  npm start -- -l basic -d -s "h3ll0"
`;

program.on('--help', () => {
    console.log(helpInfo);
});

program.parse(process.argv);

const { level, encode, decode, string } = program.opts();

if (!level || (!encode && !decode) || !string) {
    console.error('invalid command. provide correct the arguments.');
    console.log(helpInfo);
} else {
    if ((encode && decode) || (!encode && !decode)) {
        console.error('invalid command. Please provide either -e, --encode or -d, --decode.');
        console.log(helpInfo);
    } else {
        if (!['basic', 'intermediate', 'advanced', 'expert'].includes(level.toLowerCase())) {
            console.error('invalid level. provide ("basic", "intermediate", "advanced", or "expert")');
            console.log(helpInfo);
        } else {
            if (encode) {
                const encodedString = encodeLeet(string, level);
                console.log('string:  ', string);
                console.log('encoded: ', encodedString);
            }
            if (decode) {
                const decodedString = decodeLeet(string, level);
                console.log('string:  ', string);
                console.log('decoded: ', decodedString);
            }
        }
    }
}
