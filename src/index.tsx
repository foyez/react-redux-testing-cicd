import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'

import { Provider } from 'react-redux'
import { store } from './slices/store'

import { App } from './containers/App'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.register()
