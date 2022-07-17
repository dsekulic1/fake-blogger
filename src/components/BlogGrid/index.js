import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { deleteBlog } from 'store/reducers/blogReducer'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(() => ({
  blogTableDiv: {
    display: 'flex',
    margin: '0 auto',
    height: '95%',
    width: '100%',
    fontSize: '20px',
    paddingBottom: '18px',
  },
}))

const BlogGrid = ({ isAdmin, handleOpenModal }) => {
  const classes = useStyles()
  const blogs = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()

  const columns = [
    {
      field: 'userId',
      headerName: 'User id',
      flex: 1,
      sortable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 2,
      sortable: true,
      align: 'left',
    },
    {
      field: 'body',
      headerName: 'Body',
      flex: 5,
      sortable: true,
      align: 'left',
    },
    {
      field: 'actions',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      headerName: 'Actions',

      renderCell: (params) => (
        <>
          <IconButton
            aria-label='delete'
            disabled={!isAdmin}
            onClick={() => dispatch(deleteBlog(params.row.id))}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label='delete'
            disabled={!isAdmin}
            onClick={() => handleOpenModal(params.row)}
          >
            <EditIcon />
          </IconButton>
        </>
      ),
    },
  ]

  return (
    <div className={classes.blogTableDiv}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={blogs}
          columns={columns}
          pageSize={15}
          disableSelectionOnClick
          sm='auto'
        />
      </div>
    </div>
  )
}

export default BlogGrid
