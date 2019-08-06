import data from '../../static/data/articles.json';

export default async (req, res) => {
  if (data) {
    console.log('jashjdhasd');
  }
  res.status(200).json(data);
};
