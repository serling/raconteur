import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="improv resources" />
          <style>{``}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          html,
          body {
            min-height: 100vh;
            margin: 0;
            padding: 0;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html {
            font-size: 20px;
            font-family: 'arial';
            line-height: 1.5em;
          }

          body {
            font-size: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
            width: 100%;
          }

          :global(.remove-list-styles) {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          :global(.remove-link-styles) {
            text-decoration: none;
            color: inherit;
          }

          :global(.remove-button-styles) {
            appearance: none;
            background: transparent;
            border: none;
            border-radius: 0;
            padding: 0;
          }

          :global(.cf) {
            *zoom: 1;

            &:before,
            &:after {
              content: ' ';
              display: table;
            }

            &:after {
              clear: both;
            }
          }
        `}</style>
      </html>
    );
  }
}
