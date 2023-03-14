import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.loadOld().then((saving) => {
  // saving объект класса GameSaving
}, (error) => {
  // ...
});

(async () => {
  try {
    const loadedSave = await GameSavingLoader.load();
  } catch (error) {
    // ...
  }
})();
