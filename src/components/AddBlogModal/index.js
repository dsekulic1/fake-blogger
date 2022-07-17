import React, { useState, useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@material-ui/core/Button'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, editBlog } from 'store/reducers/blogReducer'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function AddBlogModal({
  open,
  setOpen,
  row,
  isEdit,
  setIsEdit,
}) {
  const [blogBody, setBlogBody] = useState('')
  const [blogTitle, setBlogTitle] = useState('')
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.user.id)

  useEffect(() => {
    if (isEdit) {
      setBlogBody(row.body)
      setBlogTitle(row.title)
    }
  }, [isEdit, row])

  const handleClose = () => setOpen(false)

  const handleSubmit = () => {
    const values = {
      title: blogTitle,
      body: blogBody,
      userId: userId,
    }

    dispatch(addBlog(values))
    setOpen(false)
  }

  const handleSave = () => {
    const values = {
      id: row.id,
      userId: userId,
      title: blogTitle,
      body: blogBody,
    }
    dispatch(editBlog(values))

    setIsEdit(false)
    setOpen(false)
  }

  const handleChangeBlogBody = (event) => {
    setBlogBody(event.target.value)
  }
  const handleChangeBlogTitle = (event) => {
    setBlogTitle(event.target.value)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Box
            component='form'
            sx={{
              borderRadius: '5px',
              backgroundColor: '#FFFAFA',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '5px',
            }}
          >
            <TextField
              required
              input
              fullWidth
              label='Input blog title'
              value={blogTitle}
              onChange={handleChangeBlogTitle}
              style={{ marginLeft: '5px' }}
              multiline
            />

            <TextField
              required
              input
              fullWidth
              label='Input blog text'
              value={blogBody}
              onChange={handleChangeBlogBody}
              style={{ marginLeft: '5px', marginTop: '20px' }}
              multiline
            />

            <ButtonGroup
              style={{
                marginTop: '10px',
                width: '100%',
                displey: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                onClick={handleClose}
                variant='contained'
                style={{
                  backgroundColor: 'red',
                  marginTop: '1%',

                  width: '90%',
                  color: '#ffff',
                  borderRadius: '10',
                }}
                sx={{ mt: 2, mb: 2 }}
              >
                Close
              </Button>
              {isEdit ? (
                <Button
                  onClick={handleSave}
                  variant='contained'
                  disabled={blogBody === '' || blogTitle === ''}
                  style={{
                    backgroundColor: 'green',
                    marginTop: '1%',
                    marginLeft: '20px',
                    width: '90%',
                    color: '#ffff',
                    borderRadius: '10',
                  }}
                  sx={{ mt: 2, mb: 2 }}
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  variant='contained'
                  disabled={blogBody === '' || blogTitle === ''}
                  style={{
                    backgroundColor: 'green',
                    marginTop: '1%',
                    marginLeft: '20px',
                    width: '90%',
                    color: '#ffff',
                    borderRadius: '10',
                  }}
                  sx={{ mt: 2, mb: 2 }}
                >
                  Submit
                </Button>
              )}
            </ButtonGroup>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
