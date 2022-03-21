import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';
import Head from 'next/head';
import RouteWithLayout from '../layout/MainLayout/RouteWithLayout';

import MainLayout from '../layout/MainLayout'
import { ColorModeProvider } from '../context/ColorModeContext';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const mdxComponents = {
  img: ResponsiveImage,
}

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const emotionCache = clientSideEmotionCache
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Destroy All Web</title>
        <meta name="description" content="Get to know all the good parts about the web we use everyday." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeProvider>
        <MDXProvider components={mdxComponents}>
          <CssBaseline />
          <RouteWithLayout Layout={MainLayout} Component={Component} pageProps={pageProps} />
        </MDXProvider>
      </ColorModeProvider>

    </CacheProvider>
  )
}

export default MyApp
