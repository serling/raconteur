import cn from 'classnames';
import PropTypes from 'prop-types';

import './page-content.scss';

const themes = {
  full: 'full',
  wide: 'wide',
  normal: 'normal',
  narrow: 'narrow'
};

const colors = {
  red: 'red',
  blue: 'blue',
  grey: 'grey'
};

const PageContent = ({ theme, children, backgroundColor }) => (
  <div
    className={cn('page-content', {
      [`page-content--${themes[theme]}`]: themes[theme],
      [`page-content--${colors[backgroundColor]}`]: colors[backgroundColor],
      'page-content--background': !!colors[backgroundColor]
    })}
  >
    <div className="page-content__inner">{children}</div>
  </div>
);

PageContent.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.oneOf(Object.keys(colors).map(key => colors[key])),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

PageContent.defaultProps = {
  theme: themes.normal
};

PageContent.themes = themes;
PageContent.colors = colors;

export default PageContent;
