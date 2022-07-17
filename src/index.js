import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { asyncBlogActions } from 'store/reducers/blogReducer'

import './index.scss'

store.dispatch(asyncBlogActions.fetchBlogs())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
