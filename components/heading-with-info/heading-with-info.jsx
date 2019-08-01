import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import InfoIcon from '../info-icon/info-icon';

const HeadingWithInfo = ({ heading, infoComponents }) => (
  <>
    <div className="heading-with-info">
      <div className="heading-with-info__heading">
        <Heading {...heading} />
      </div>
      {infoComponents && (
        <div className="heading-with-info__info">
          <InfoIcon components={infoComponents} />
        </div>
      )}
    </div>
    <style jsx>{`
      .heading-with-info {
        display: flex;
        align-items: center;

        &__info {
          margin-left: 1rem;
        }
      }
    `}</style>
  </>
);

HeadingWithInfo.propTypes = {
  heading: PropTypes.object.isRequired,
  infoComponents: PropTypes.array
};

export default HeadingWithInfo;
