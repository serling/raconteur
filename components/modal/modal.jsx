import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cn from 'classnames';

import Button from '../button/button';

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
      <>
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
        <style jsx global>
          {`
            .modal {
              $self: &;
              position: absolute;
              background-color: white;

              &--menu {
                width: 100%;
                min-height: 100vh;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;

                #{$self}__content {
                  max-width: 1240px;
                  margin: 0 auto;
                  padding: 2rem 2rem 2rem 2rem;
                  position: relative;
                }

                #{$self}__close {
                  top: 2rem;
                }
              }

              &--prompt {
                left: 2rem;
                right: 2rem;
                top: 50%;
                transform: translateY(-50%);
                box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.75);
                border: 1px solid #ececec;

                #{$self}__content {
                  padding: 4rem 2rem 2rem 2rem;
                  position: relative;
                }
              }

              &__close {
                position: absolute;
                top: 2rem;
                right: 2rem;
              }

              &__overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.75);
                z-index: 11;

                &--prompt {
                  opacity: 0;
                  transition: opacity 0.2s ease-in-out;

                  &.ReactModal__Overlay--after-open {
                    opacity: 1;
                  }

                  &.ReactModal__Overlay--before-close {
                    opacity: 0;
                  }
                }

                &--menu {
                  transform: translateX(100%);
                  transition: transform 0.2s ease-in-out;

                  &.ReactModal__Overlay--after-open {
                    transform: translateX(0);
                  }

                  &.ReactModal__Overlay--before-close {
                    transform: translateX(100%);
                  }
                }
              }
            }
          `}
        </style>
      </>
    );
  }
}

Modal.themes = themes;

export default Modal;
