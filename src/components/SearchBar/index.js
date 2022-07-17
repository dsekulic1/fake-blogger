import React from 'react'
import Stack from '@mui/material/Stack'
import SearchBar from 'material-ui-search-bar'

const Search = ({ searched, requestSearch, cancelSearch }) => {
  return (
    <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={{ width: '100%' }}
      />
    </Stack>
  )
}

export default Search
