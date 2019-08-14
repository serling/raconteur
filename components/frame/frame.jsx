import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Frame = ({children, className}) => {
  return (
      <>
    <div className={cn("frame",className)}>
        {children}
    </div>
    <style jsx>{`
        .frame {
            box-shadow: 2px 2px 5px 0px black;
          border-radius: 0.2rem;
          background-color: white;
          padding: 1.5rem;

        }    
    `}</style>
    </>
  );
};

Frame.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Frame;
