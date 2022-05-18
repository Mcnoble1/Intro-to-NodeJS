import { add } from './myLib.mjs';
import assert from 'assert';

console.log('add()\nShould add two numbers')
try {
    assert.strictEqual(add(1, 2), 3);
    console.log('passed');
} catch (e) {
    console.log('failed');
    console.error(e)
}