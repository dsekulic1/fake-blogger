import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'

import Home from 'pages/Home'
import BlogPage from 'pages/BlogPage'
import PageNotFound from 'pages/PageNotFound'
import Login from 'pages/Login'

import { homeUrl, loginUrl, blogUrl } from 'utilities/appUrls'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={homeUrl} component={Home} />
      <GuestRoute path={loginUrl} component={Login} />
      <PrivateRoute exact path={blogUrl} component={BlogPage} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
