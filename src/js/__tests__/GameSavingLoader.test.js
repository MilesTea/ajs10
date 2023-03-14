import GameSavingLoader from '../GameSavingLoader';

test('testing GameSavingLoader load function', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

test('testing GameSavingLoader Oldload function', () => GameSavingLoader.loadOld().then((data) => {
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
}));
