import React from 'react'
import { hydrate, render } from 'react-dom'
// import ReactDOM from "react-dom";
import { SWRConfig } from 'swr'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import './App.css'
import './styles/app.css'
import './styles/header.css'
import './styles/news-page.css'
import { BrowserRouter } from 'react-router-dom'
import './fonts/AlQabas-Regular.ttf'
import './fonts/29LT-Bukra.ttf'
import './i18n'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher: (r) =>
            fetch(`https://syria-exchange.com/panel/v1/api${r}`).then((res) =>
              res.json()
            ),
        }}
      >
        <App />
      </SWRConfig>
    </BrowserRouter>,
    rootElement
  )
} else {
  render(
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher: (r) =>
            fetch(`https://syria-exchange.com/panel/v1/api${r}`).then((res) =>
              res.json()
            ),
        }}
      >
        <App />
      </SWRConfig>
    </BrowserRouter>,
    rootElement
  )
}
