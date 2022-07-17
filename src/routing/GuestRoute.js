import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { homeUrl } from 'utilities/appUrls'

// handle the public routes
const GuestRoute = ({ component: Component, path: Path, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  return (
    <Route
      path={Path}
      render={() =>
        !isLoggedIn ? <Component {...rest} /> : <Redirect to={homeUrl} />
      }
    />
  )
}

export default GuestRoute
