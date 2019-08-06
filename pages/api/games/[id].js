import games from '../../../static/data/games/games';

export default ({ query }, res) => {
  const { payload } = games;

  const filtered = payload.games.filter(game => game.id === query.id);

  if (filtered.length <= 0) {
    const errorObject = {
      statusCode: 404,
      title: 'Could not find game'
    };

    res.status(404).json({ error: errorObject });
  }

  const data = {
    ...games,
    payload: { ...filtered[0].data }
  };

  res.status(200).json(data);
};
