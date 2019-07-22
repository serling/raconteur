import data from '../../../static/data/articles/index';

export default async (req, res) => {
  res.status(200).json(data);
};
