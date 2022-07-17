import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    paddingBottom: '20px',
  },
  grid: {
    height: '100vh',
    marginTop: '10px',
  },
  paperMain: {
    margin: 'auto',
    height: '100vh',
    width: '100%',
  },
  paper: {
    textAlign: 'center',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ paddingBottom: '10px' }}>
      <Grid container spacing={1} className={classes.grid}>
        <Paper className={`${classes.paperMain} ${classes.paper}`}>
          <h1>Wellcome to fake blogs</h1>
          <img
            src='https://st.depositphotos.com/1186248/2404/i/450/depositphotos_24043595-stock-photo-fake-rubber-stamp.jpg'
            alt='Fake blogs'
          />
        </Paper>
      </Grid>
    </div>
  )
}

export default Home
