import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'public/globalStyles';
import theme from 'public/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ThankU</title>
        </Head>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
