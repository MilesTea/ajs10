import GameSaving from './GameSaving.js';
import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((value) => { resolve(new GameSaving(value)); })
        .catch((error) => reject(error));
    });
  }
}
