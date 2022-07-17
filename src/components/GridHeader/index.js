import React from 'react'
import Stack from '@mui/material/Stack'
import SearchBar from 'material-ui-search-bar'
import Button from '@mui/material/Button'

const AddBlogGridHeader = ({
  searched,
  requestSearch,
  cancelSearch,
  onClickAdd,
  disabled,
}) => {
  return (
    <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={{ width: '90%' }}
      />
      <Button
        variant='contained'
        disabled={disabled}
        style={{ width: '10%' }}
        onClick={() => onClickAdd()}
      >
        Add Blog
      </Button>
    </Stack>
  )
}

export default AddBlogGridHeader
