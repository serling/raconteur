import data from '../../static/data/index.json';

export default (req, res) => {
  res.status(200).json(data);
};
