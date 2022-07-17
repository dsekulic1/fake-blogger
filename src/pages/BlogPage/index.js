import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search } from 'store/reducers/blogReducer'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import BlogGrid from 'components/BlogGrid'
import AddBlogGridHeader from 'components/GridHeader'
import AddBlogModal from 'components/AddBlogModal'

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
    width: '90%',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: theme.palette.grey,
  },
}))

const BlogPage = () => {
  const [searched, setSearched] = useState('')
  const [rowToEdit, setRowToEdit] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const isAdmin = useSelector((state) => state.user.role === 'ROLE_ADMIN')

  const requestSearch = (searchedVal) => {
    dispatch(search(searchedVal))
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const handleOpenModal = (row) => {
    setIsEdit(true)
    setRowToEdit(row)
    setOpen(true)
  }

  return (
    <div className={classes.root} style={{ paddingBottom: '10px' }}>
      <Grid container spacing={1} className={classes.grid}>
        <Paper className={`${classes.paperMain} ${classes.paper}`}>
          <AddBlogGridHeader
            searched={searched}
            requestSearch={requestSearch}
            cancelSearch={cancelSearch}
            onClickAdd={() => setOpen(true)}
            disabled={!isAdmin}
          />
          <BlogGrid isAdmin={isAdmin} handleOpenModal={handleOpenModal} />
          <AddBlogModal
            open={open}
            setOpen={setOpen}
            row={rowToEdit}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </Paper>
      </Grid>
    </div>
  )
}

export default BlogPage
