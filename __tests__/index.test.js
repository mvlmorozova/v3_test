// @ts-check
import { test } from 'node:test';
import assert from 'assert/strict';
import {
  getRemainder, calcPercentage, getLongestString, concatStrings, normalizeVowels,
} from '../index.js';

test('task1', () => {
  assert.strictEqual(getRemainder(1, 1), 0);
  assert.strictEqual(getRemainder(4, 2), 0);
  assert.strictEqual(getRemainder(11, 5), 1);
});

test('task2', () => {
  assert.strictEqual(calcPercentage(2, 100), 2);
  assert.strictEqual(calcPercentage(10000, 50000), 20);
  assert.strictEqual(calcPercentage(0, 100), 0);
});

test('task3', () => {
  assert.strictEqual(getLongestString('1', '11'), '11');
  assert.strictEqual(getLongestString('Hexlet', 'Hex'), 'Hexlet');
  assert.strictEqual(getLongestString('Hexlet', 'Hello!'), 'Hexlet');
  assert.strictEqual(getLongestString('Hehehehehe', ''), 'Hehehehehe');
});

test('task4', () => {
  assert.strictEqual(concatStrings('Heet', 'xl', 2), 'Hexlet');
  assert.strictEqual(concatStrings('Hexlet', '-', 3), 'Hex-let');
  assert.strictEqual(concatStrings('hey', ', friend!', 3), 'hey, friend!');
});

test('task5', () => {
  assert.strictEqual(normalizeVowels('Hexlet'), 'Hexlet');
  assert.strictEqual(normalizeVowels('HeexlEEt'), 'Heexleet');
  assert.strictEqual(normalizeVowels('AJUoOiIldEe'), 'aJuooiildee');
  assert.strictEqual(normalizeVowels(''), '');
});
