import data from '../../static/data/utilities.json';

export default async (req, res) => {
  res.status(200).json(data);
};
