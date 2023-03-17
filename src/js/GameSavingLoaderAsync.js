import GameSaving from './GameSaving.js';
import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return new GameSaving(value);
  }
}
