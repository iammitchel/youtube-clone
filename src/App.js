import React from 'react'
import { Grid } from '@mui/material'
import { SearchBar, VideoDetail } from './components'

import youtube from './api/youtube'

const App = () => {
  return (
   <Grid justify='center' container spacing={16}>
    <Grid item xs={12}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={8}>
          <VideoDetail />
        </Grid>
        <Grid item xs={4}>
          {/* VIDEO LIST */}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default App
