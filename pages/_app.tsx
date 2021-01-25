import React, { useEffect } from 'react'
import App from 'next/app'
import Head from 'next/head'
import { TinaCMS, TinaProvider, ModalProvider } from 'tinacms'
import { DefaultSeo } from 'next-seo'
import data from '../content/siteConfig.json'
// import TagManager from 'react-gtm-module'
import { GlobalStyles, FontLoader } from '@tinacms/styles'
import { BrowserStorageApi } from 'utils/plugins/browser-storage-api/BrowserStorageApi'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'
import { GlobalStyle } from 'components/styles/GlobalStyle'
import 'components/styles/fontImports.css'
import path from 'path'
import { BlogPostCreatorPlugin } from '../tinacms/BlogPostCreator'
import { ReleaseNotesCreatorPlugin } from '../tinacms/ReleaseNotesCreator'
import { NextGithubMediaStore } from '../utils/plugins/NextGithubMediaStore'

// the following line will cause all content files to be available in a serverless context
path.resolve('./content/')

const github = new GithubClient({
  proxy: '/api/proxy-github',
  authCallbackRoute: '/api/create-github-access-token',
  clientId: process.env.GITHUB_CLIENT_ID,
  baseRepoFullName: process.env.BASE_REPO_FULL_NAME,
})

const MainLayout = ({ Component, pageProps }) => {
  const tinaConfig = {
    enabled: pageProps.preview,
    toolbar: pageProps.preview,
    apis: {
      github,
      storage:
        typeof window !== 'undefined'
          ? new BrowserStorageApi(window.localStorage)
          : {},
    },
    media: new NextGithubMediaStore(github),
    plugins: [BlogPostCreatorPlugin, ReleaseNotesCreatorPlugin],
  }

  const cms = React.useMemo(() => new TinaCMS(tinaConfig), [])

  useEffect(() => {
    import('react-tinacms-date').then(({ DateFieldPlugin }) => {
      cms.plugins.add(DateFieldPlugin)
    })
  }, [pageProps.preview])

  const enterEditMode = async () => {
    const token = localStorage.getItem('tinacms-github-token') || null
    const headers = new Headers()

    if (token) {
      headers.append('Authorization', 'Bearer ' + token)
    }

    const response = await fetch(`/api/preview`, { headers })
    const data = await response.json()

    if (response.status === 200) {
      window.location.reload()
    } else {
      throw new Error(data.message)
    }
  }

  const exitEditMode = () => {
    fetch(`/api/reset-preview`).then(() => {
      window.location.reload()
    })
  }

  const loadFonts = useShouldLoadFont(cms)

  return (
    <TinaProvider cms={cms} styled={false}>
      <GlobalStyles />
      {loadFonts && <FontLoader />}
      <ModalProvider>
        <TinacmsGithubProvider
          onLogin={enterEditMode}
          onLogout={exitEditMode}
          error={pageProps.error}
        >
          <DefaultSeo
            title={data.seoDefaultTitle}
            titleTemplate={'%s | ' + data.title}
            description={data.description}
            openGraph={{
              type: 'website',
              locale: 'en_CA',
              url: data.siteUrl,
              site_name: data.title,
              images: [
                {
                  url: 'https://www.redshoecasino.com/img/tina-twitter-share.png',
                  width: 1200,
                  height: 628,
                  alt: `El Bet`,
                },
              ],
            }}
            twitter={{
              handle: data.social.twitterHandle,
              site: data.social.twitterHandle,
              cardType: 'summary_large_image',
            }}
          />
          <Head>
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="theme-color" content="#E6FAF8" />



          </Head>
          <GlobalStyle />
          <div className="background"></div>
          <Component {...pageProps} />
          <svg>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
            <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
            <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" 
            keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
            </filter>
          </svg>
          <script src="https://component.binarysports.com/signup-es2015.js" type="module"></script>
          <script src="https://component.binarysports.com/signup-es5.js"></script>

          <script src="https://microgaming.binarysports.com/microgaming-webcomponent.js"></script>
          <link rel="stylesheet" href="https://microgaming.binarysports.com/styles.css"></link>
        
        </TinacmsGithubProvider>
      </ModalProvider>
    </TinaProvider>
    
  )
}

function useShouldLoadFont(cms: TinaCMS) {
  const [enabled, setEnabled] = React.useState(cms.enabled)

  React.useEffect(() => {
    if (cms.enabled) return
    return cms.events.subscribe('cms:enable', () => {
      setEnabled(true)
    })
  }, [])

  return enabled
}

class Site extends App {
/*
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({
        gtmId: process.env.GTM_ID,
      })
    }
  }
*/

  render() {
    const { Component, pageProps } = this.props
    return <MainLayout Component={Component} pageProps={pageProps} />
  }
}

export default Site
