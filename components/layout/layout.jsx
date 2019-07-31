import Head from 'next/head';

import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="layout__content">{children}</div>
      <Footer />
      <style jsx>{`
        .layout__content {
          margin: 2rem 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
