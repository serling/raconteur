import data from '../../static/data/home.json';

export default (req, res) => {
  res.status(200).json(data);
};
