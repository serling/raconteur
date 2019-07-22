import data from '../../../static/data/utilities/index';

export default async (req, res) => {
  res.status(200).json(data);
};
