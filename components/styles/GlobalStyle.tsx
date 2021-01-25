import { createGlobalStyle, css } from 'styled-components'
import React from 'react'

const CssReset = css`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`

export const GlobalStyle = React.memo(createGlobalStyle`
  header {
    font-color: black;
  }
  body {
    margin-right: 0px;
    margin-left: 0px;
    background-color: black;
  }

  .background {
    color: #999999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -100;
    background-image: url("/el-bet/img/black-waves-background.jpg");
    background-position:center; 
    background-repeat:no-repeat;
    background-size:cover; 
    filter: url("#turbulence");
}

  html {
    font-size: 81.25%;
    font-family: 'treadmd';
    line-height: 1.6;
    width: 100%;
    overflow-x: hidden;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    -webkit-font-smooth: 'antialiased';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    @media (min-width: 450px) {
      font-size: 87.5%;
    }

    @media (min-width: 685px) {
      font-size: 100%;
    }

    /* Color */
    --color-primary: darkorange;
    --color-primary-dark: orangered;
    --color-secondary: orange;
    --color-secondary-dark: darkorange;
    --color-seafoam: seafoam;
    --color-seafoam-dark: seafoam;
    --color-light: orange;
    --color-light-dark: darkorange;
    --color-grey: silver;
    --color-grey-dark: dark-grey;

    /* Layout */
    --breakpoint-small: 400px;
    --breakpoint-medium: 800px;
    --breakpoint-large: 1200px;

    /* Typography */
    --font-black-pearl: 'black-pearl';
    --font-pirates-pw: 'pirates-pw';
    --font-sketch-bones: 'sketch-bones';
    --font-treadmd: 'treadmd';
    --font-treasure-map: 'treasure-map';

    --font-default: 'treadmd';
    --font-header-nav: 'sketch-bones';
    --nav-item-color-primary: none;

    * {
      box-sizing: inherit;
      font-variant-numeric: inherit;
      font-family: inherit;
      line-height: inherit;
      font-size: 100%;
      font-weight: normal;
      scrollbar-width: thin;
      scrollbar-color: #E1DDEC var(--color-light);
      
      &::-webkit-scrollbar {
        width: 9px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
        border-left: 1px solid var(--color-light-dark);
        border-right: 1px solid var(--color-light-dark);
      }
      &::-webkit-scrollbar-thumb {
        background-color: #E1DDEC;
        border-radius: 0;
        border: none;
      }
    }
  }
`)
