import BlockContent from '@sanity/block-content-to-react';
import Poster from '../../components/image/poster';
import Word from '../../components/word/word';
import PageContent from '../../components/page-content/page-content';
import InlineContent from '../../components/inline-content/inline-content';

const serializers = {
  marks: {
    suggestion: data => {
      const { children, mark } = data;
      const { category } = mark;

      return <Word text={children} category={category} />;
    }
  },
  types: {
    paragraph: data => {
      const { node } = data;
      const { body, heading } = node;

      return (
        <PageContent>
          <BlockContent blocks={body} serializers={serializers} />
        </PageContent>
      );
    },
    poster: data => {
      const { node } = data;
      const { align } = node;
      console.log('POSTER DATA', data);

      if (!!align) {
        return (
          <InlineContent alignment={align[0]}>
            <Poster image={node} showMeta={true} />
          </InlineContent>
        );
      }

      return <Poster image={node} showMeta={true} />;
    }
  }
};

const Blocks = props => {
  const { body } = props;

  return (
    <>
      <div className="blocks">
        <BlockContent blocks={body} serializers={serializers} />
      </div>
      <style jsx global>{`
        .blocks {
          line-height: 1.6;

          > div {
            > p:first-child::first-letter {
              color: #da0050;
              font-size: 2em;
              font-weight: 600;
              line-height: 1;
            }

            > * {
              margin: 0 0 1rem 0;

              &:first-child {
                margin-bottom: 0;
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          ul,
          li {
            list-style: inside dot;
          }

          h1,
          h2 {
            margin-bottom: 0;
            margin-top: 2rem;

            + * {
              margin-top: 0.5rem;
            }
          }

          h3,
          h4,
          h5,
          h6 {
            margin-bottom: 0;

            + * {
              margin-top: 0.5rem;
            }
          }

          p {
          }

          a {
            text-decoration: none;
            border-bottom: 1px solid #da0050;
            padding-bottom: 1px;
            color: #da0050;
            text-decoration: none;

            &:hover,
            &:focus {
              border: 0;
              border-color: #a7003d;
              color: #a7003d;
            }

            &[href*='//'] {
            }
          }

          iframe {
            margin: 1rem 0;
          }

          &--lead {
            font-size: 1.625rem;
          }
        }
      `}</style>
    </>
  );
};

export default Blocks;
