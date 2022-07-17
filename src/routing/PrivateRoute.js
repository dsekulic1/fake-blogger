import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { loginUrl } from 'utilities/appUrls'

// handle the private routes
const PrivateRoute = ({ component: Component, path: Path, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  return (
    <Route
      path={Path}
      render={() =>
        isLoggedIn ? <Component {...rest} /> : <Redirect push to={loginUrl} />
      }
    />
  )
}

export default PrivateRoute
