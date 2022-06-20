import Head from 'next/head';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import customTheme from '../styles/theme';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
