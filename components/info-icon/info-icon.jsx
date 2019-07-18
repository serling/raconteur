import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';
import Modal from '../modal/modal';
import RichText from '../rich-text/rich-text';

import './info-icon.scss';

const InfoIcon = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="info-icon">
      <Button
        onClick={toggleOnClick}
        iconName="hamburger"
        iconSize={Button.iconSizes.small}
      />
      <Modal
        onClose={toggleOnClick}
        isVisible={isVisible}
        isCloseable={true}
        contentLabel="info"
      >
        <RichText string={text} />
      </Modal>
    </div>
  );
};

InfoIcon.propTypes = {
  text: PropTypes.string.isRequired
};

InfoIcon.defaultProps = {
  text: ''
};

export default InfoIcon;
