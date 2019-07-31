const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__content">
        Interesting information at the bottom
      </div>
    </footer>
    <style jsx>{`
      .footer {
        margin-top: 4rem;
        border-top: 1px solid black;

        &__content {
          max-width: 1240px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }
      }
    `}</style>
  </>
);

export default Footer;
