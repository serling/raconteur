import BlockContent from '@sanity/block-content-to-react';
import Poster from '../../components/image/poster';
import Word from '../../components/word/word';

const serializers = {
  marks: {
    suggestion: data => {
      const { children, mark } = data;
      const { category } = mark;

      return <Word text={children} category={category} />;
    }
  },
  types: {
    poster: data => {
      const { node } = data;

      return <Poster image={node} showMeta={true} />;
    }
  }
};

const Blocks = props => {
  const { body } = props;

  return <BlockContent blocks={body} serializers={serializers} />;
};

export default Blocks;
