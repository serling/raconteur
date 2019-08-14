import React from 'react';
import PropTypes from 'prop-types';

import Link from '../link/link';

const ReadMore = ({text, href}) => {
  return (
      <>
    <div className="read-more">
    <Link href={href} theme={Link.themes.primary}>
        {text}
    </Link>
  </div>
  <style jsx>{`
    .read-more {
        padding-top: 0.5rem;
        border-top: 2px solid #da0050;
        text-align: right;
    }
    `}</style>
  </>
  );
};


ReadMore.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default ReadMore;
