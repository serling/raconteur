import BlockContent from '@sanity/block-content-to-react';
import Poster from '../../components/image/poster';
import Word from '../../components/word/word';

const serializers = {
  marks: {
    suggestion: data => {
      console.log('serializing suggestion:', data);
      const { children } = data;

      return <Word text={children} />;
    }
  },
  types: {
    poster: data => {
      const { node } = data;

      console.log('serializing poster:', data);
      return <Poster image={node} showMeta={true} />;
    }
  }
};

const Blocks = props => {
  const { body } = props;

  return <BlockContent blocks={body} serializers={serializers} />;
};

export default Blocks;
