import { games } from '../../../static/data/games/games';

export default ({ query }, res) => {
  const filtered = games.filter(article => article.id === query.id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0].data);
  } else {
    let error = {
      message: 'Game not found'
    };

    res.status(404).json({ error });
  }
};
