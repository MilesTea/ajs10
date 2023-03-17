import GameSavingLoaderAsync from '../GameSavingLoaderAsync';
import GameSavingLoaderPromises from '../GameSavingLoaderPromises';

test('testing GameSavingLoader Async function', async () => {
  const data = await GameSavingLoaderAsync.load();
  expect(data.saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

test('testing GameSavingLoader Promises load function', () => GameSavingLoaderPromises.load().then((data) => {
  expect(data.saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
}));
