import React, { useState } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from 'store/reducers/userReducer'
import { blogUrl, homeUrl, loginUrl } from 'utilities/appUrls'

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to={homeUrl}>Home</Link>
            </ListItemText>
          </ListItem>
          {isLoggedIn && (
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={blogUrl}>Blogs</Link>
              </ListItemText>
            </ListItem>
          )}
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {!isLoggedIn ? (
                <Link to={loginUrl}>Login</Link>
              ) : (
                <>
                  <Link to={homeUrl} onClick={() => dispatch(signout())}>
                    Signout
                  </Link>
                </>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}
export default DrawerComponent
