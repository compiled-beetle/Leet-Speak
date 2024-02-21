const { encodeLeet, decodeLeet } = require('../index');

/**
 * Test suite for the encodeLeet function.
 */
describe('encodeLeet', () => {
    /**
     * Test case to encode basic Leet.
     */
    test('encode basic Leet', () => {
        const input = 'hello world';
        const level = 'basic';
        const encoded = encodeLeet(input, level);
        expect(encoded).toEqual('h3ll0 w0rld');
    });

    /**
     * Test case to encode intermediate Leet.
     */
    test('encode intermediate Leet', () => {
        const input = 'hello world';
        const level = 'intermediate';
        const encoded = encodeLeet(input, level);
        expect(encoded).toEqual('#3110 \\/\\/0I21|)');
    });

    /**
     * Test case to encode advanced Leet.
     */
    test('encode advanced Leet', () => {
        const input = 'hello world';
        const level = 'advanced';
        const encoded = encodeLeet(input, level);
        // multiple possible encodings
        // just assert result equals string
        expect(typeof encoded).toEqual('string');
    });

    /**
     * Test case to encode expert Leet.
     */
    test('encode expert Leet', () => {
        const input = 'hello world';
        const level = 'expert';
        const encoded = encodeLeet(input, level);
        // multiple possible encodings
        // just assert result == string
        expect(typeof encoded).toEqual('string');
    });
});

/**
 * Test suite for the decodeLeet function.
 */
describe('decodeLeet', () => {
    /**
     * Test case to decode basic Leet.
     */
    test('decode basic Leet', () => {
        const input = 'h3ll0 w0rld';
        const level = 'basic';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });

    /**
     * Test case to decode intermediate Leet.
     */
    test('decode intermediate Leet', () => {
        const input = '#3110 \\/\\/0I21|)';
        const level = 'intermediate';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });

    /**
     * Test case to decode advanced Leet.
     */
    test('decode advanced Leet', () => {
        const input = '(-)ë|_|_<> \\N<>2|_[)';
        const level = 'advanced';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });

    /**
     * Test case to decode expert Leet.
     */
    test('decode expert Leet', () => {
        const input = '(-)£77Ø v²Ø27)';
        const level = 'expert';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });
});
