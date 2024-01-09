import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import App from './Components/App.tsx'
import './Styles/index.less'
import { store } from './Data/Objects/Store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')

