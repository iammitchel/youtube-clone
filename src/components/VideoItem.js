import React from 'react'

import {Grid, Paper, Typography} from '@mui/material';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor:'pointer' }} onClick={() => onVideoSelect(video)}>
        <img
          style={{ marginRight: "15px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem