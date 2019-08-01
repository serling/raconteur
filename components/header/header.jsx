import Route from 'next/link';

import Button from '../button/button';
import Link from '../link/link';
import MainMenu from '../main-menu/main-menu';

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
              <div className="header__link">
                <Link href="/index" className="header__logo">
                  Home
                </Link>
              </div>
              <div className="header__link">
                <Route href="/articles">
                  <a>Articles</a>
                </Route>
              </div>
              <div className="header__link">
                <Link href="/games">Games</Link>
              </div>
              <div className="header__link">
                <Link href="/utilities">Utilities</Link>
              </div>
            </nav>
            <div className="header__actions">
              <Button
                textIsHidden={true}
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
        <style jsx>{`
          .header {
            border-bottom: 1px solid black;

            &__content {
              max-width: 1240px;
              margin: 0 auto;
              padding: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            &__actions {
              display: flex;
              align-items: center;
            }

            &__navigation {
              display: flex;
              align-items: center;
            }

            &__link {
              margin-right: 1rem;

              &:last-child {
                margin-right: 0;
              }
            }
          }
        `}</style>
      </>
    );
  }
}

export default Header;
