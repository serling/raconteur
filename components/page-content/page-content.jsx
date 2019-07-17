import cn from 'classnames';
import PropTypes from 'prop-types';

import './page-content.scss';

const themes = {
  full: 'full',
  wide: 'wide',
  normal: 'normal',
  narrow: 'narrow'
};

const PageContent = ({ theme, children }) => (
  <div
    className={cn('page-content', {
      [`page-content--${themes[theme]}`]: themes[theme]
    })}
  >
    <div className="page-content__inner">{children}</div>
  </div>
);

PageContent.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

PageContent.defaultProps = {
  theme: themes.normal
};

PageContent.themes = themes;

export default PageContent;
