import cn from 'classnames';
import PropTypes from 'prop-types';

import Colors from '../quote/colors';

import './page-content.scss';

const themes = {
  full: 'full',
  wide: 'wide',
  normal: 'normal',
  narrow: 'narrow'
};

const margins = {
  default: 'default',
  small: 'small',
  none: 'none'
};

const colors = Colors;

const PageContent = ({ theme, margin, children, backgroundColor }) => (
  <div
    className={cn('page-content', {
      [`page-content--${themes[theme]}`]: themes[theme],
      [`page-content--margins-${margins[margin]}`]: margins[margin],
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
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  margins: PropTypes.oneOf(Object.keys(margins).map(key => margins[key]))
};

PageContent.defaultProps = {
  theme: themes.normal,
  margin: margins.default
};

PageContent.themes = themes;
PageContent.colors = colors;
PageContent.margins = margins;

export default PageContent;
