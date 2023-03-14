import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static loadOld() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    });
  }

  static async load() {
    const data = await read();
    const value = await (json(data));
    return value;
  }
}
