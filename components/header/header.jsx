import Route from 'next/link';
import PropTypes from 'prop-types';

import Button from '../button/button';
import Link from '../link/link';
import Icon from '../icon/icon';
import MainMenu from '../main-menu/main-menu';

import './header.scss';

class Header extends React.Component {
  static propTypes = {};

  state = {
    menuIsVisible: false
  };

  handleOnCloseModal = () => {
    this.setState({
      menuIsVisible: false
    });
  };

  handleOnOpenModal = () => {
    this.setState({
      menuIsVisible: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__content">
            <nav className="header__navigation">
              <Link href="/index" className="header__logo">
                <Icon name="close" size={Icon.sizes.medium} />
              </Link>
              <Link href="/article-page" text="Article (page)" />
              <Route href="/article-page">
                <a>Article (route)</a>
              </Route>
            </nav>
            <div className="header__actions">
              <Button
                iconName="hamburger"
                text="open main menu"
                onClick={() => this.handleOnOpenModal()}
              />
            </div>
          </div>
        </header>
        <MainMenu
          onClose={() => this.handleOnCloseModal()}
          isVisible={this.state.menuIsVisible}
        />
      </React.Fragment>
    );
  }
}

export default Header;
