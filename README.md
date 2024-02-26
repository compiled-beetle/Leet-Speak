# Leet-Speak Encoder/Decoder

This is a simple Node.js application for encoding and decoding strings into Leet-Speak.

> NOTE: Decoding Leet-Speak is not a straightforward process, and the application is not be able to decode all strings
> accurately. Only basic level is decoded accurately.

## Installation

1. Clone the repository: `git clone https://github.com/compiled-beetle/Leet-Speak`
2. Navigate to the project directory: `cd Leet-Speak`
3. Install dependencies: `npm install`

## Usage

To encode a string into Leet-Speak, run:

```
npm start -- -l <level> -e -s "<input_string>"
```

To decode a Leet-Speak string, run:

```
npm start -- -l <level> -d -s "<leet_string>"
```

Replace `<level>` with one of the following options: `basic`, `intermediate`, `advanced`, or `expert`.

## Examples

Encoding:

```
npm start -- -l basic -e -s "hello world"
```

Decoding:

```
npm start -- -l basic -d -s "h3ll0 w0r1d"
```

## Options

-   `-l, --level <level>`: Leet-Speak complexity level (`basic`, `intermediate`, `advanced`, or `expert`)
-   `-e, --encode`: Encode the input string
-   `-d, --decode`: Decode the input string
-   `-s, --string <string>`: Input string to encode or decode
-   `-h, --help`: Display help for command

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
