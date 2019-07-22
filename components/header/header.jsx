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
      <>
        <header className="header">
          <div className="header__content">
            <nav className="header__navigation">
              <Link href="/index" className="header__logo">
                Home
              </Link>
              <Route href="/articles">
                <a>Articles</a>
              </Route>
              <Link href="/games">Games</Link>
              <Link href="/utilities">Utilities</Link>
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
      </>
    );
  }
}

export default Header;
