import data from '../../static/data/games.json';

export default async (req, res) => {
  res.status(200).json(data);
};
