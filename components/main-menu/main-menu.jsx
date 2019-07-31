import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/modal';
import Heading from '../heading/heading';

const MainMenu = ({ onClose, isVisible }) => (
  <>
    <Modal
      onClose={onClose}
      isVisible={isVisible}
      isCloseable={true}
      contentLabel="main menu"
      theme={Modal.themes.menu}
    >
      <div className="main-menu">
        <Heading level={2} text="Main menu" />
        <div className="main-menu__content">
          <menu>
            <li>thing</li>
            <li>thing 2</li>
            <li>thing 3</li>
          </menu>
        </div>
      </div>
    </Modal>
    <style jsx>{`
      .main-menu {
        &__content {
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid black;
        }
      }
    `}</style>
  </>
);

MainMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool
};

export default MainMenu;
