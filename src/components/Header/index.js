import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import DrawerComponent from './Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from 'store/reducers/userReducer'
import { blogUrl, homeUrl, loginUrl } from 'utilities/appUrls'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: theme.spacing(10),
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  icon: {
    width: '300px',
    height: '50px',
    marginRight: '2px',
    marginTop: '5px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(10),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}))

function Navbar() {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <>
            <DrawerComponent />
          </>
        ) : (
          <>
            <div className={classes.navlinks}>
              <Link to={homeUrl} className={classes.link}>
                Home
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to={blogUrl} className={classes.link}>
                    Blogs
                  </Link>
                  <Link
                    to={homeUrl}
                    onClick={() => dispatch(signout())}
                    className={classes.link}
                  >
                    Signout
                  </Link>
                </>
              ) : (
                <Link to={loginUrl} className={classes.link}>
                  Login
                </Link>
              )}
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
