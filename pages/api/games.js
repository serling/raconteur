import data from '../../static/data/games.json';

export default (req, res) => {
  res.status(200).json(data);
};
