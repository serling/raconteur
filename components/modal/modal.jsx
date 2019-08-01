import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cn from 'classnames';

import Button from '../button/button';
import './modal.scss';

ReactModal.setAppElement('#__next');

const themes = {
  prompt: 'prompt',
  menu: 'menu'
};

class Modal extends React.Component {
  static propTypes = {
    contentLabel: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool,
    isCloseable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    theme: PropTypes.any
  };

  static defaultProps = {
    isCloseable: true,
    theme: themes.prompt
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.isVisible}
        className={cn('modal', {
          [`modal--${themes[this.props.theme]}`]: themes[this.props.theme]
        })}
        onRequestClose={this.props.onClose}
        contentLabel={this.props.contentLabel}
        shouldCloseOnOverlayClick={this.props.isCloseable}
        overlayClassName={cn('modal__overlay', {
          [`modal__overlay--${themes[this.props.theme]}`]: themes[
            this.props.theme
          ]
        })}
        closeTimeoutMS={200}
      >
        <div className="modal__content">
          {this.props.isCloseable && (
            <Button
              textIsHidden={true}
              onClick={this.props.onClose}
              text="close modal"
              iconName="close"
              className="modal__close"
            />
          )}
          {this.props.children}
        </div>
      </ReactModal>
    );
  }
}

Modal.themes = themes;

export default Modal;
