import data from '../../../static/data/games/index';

export default async (req, res) => {
  res.status(200).json(data);
};
