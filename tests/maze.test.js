import test from 'node:test';
import assert from 'node:assert/strict';
import { createInitialMaze } from '../src/app/game/maze.js';

test('replay restores collected dots and power pellets', () => {
  const first = createInitialMaze();
  first[1][1] = 2;
  first[2][1] = 2;
  const replay = createInitialMaze();
  assert.equal(replay[1][1], 0);
  assert.equal(replay[2][1], 3);
});
test('simultaneous game instances have independent rows', () => {
  const first = createInitialMaze();
  const second = createInitialMaze();
  assert.notEqual(first, second);
  for (let row = 0; row < first.length; row++) assert.notEqual(first[row], second[row]);
});
test('fresh game preserves maze dimensions, walls and spawn', () => {
  const maze = createInitialMaze();
  assert.equal(maze.length, 13);
  assert.ok(maze.every(row => row.length === 13));
  assert.ok(maze[0].every(cell => cell === 1));
  assert.equal(maze[10][6], 0);
});
