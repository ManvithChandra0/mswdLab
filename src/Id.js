import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import man from './cafe/img/man.jpg'

export default function Id() {
  return (<div class="App">
        <center>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin: 8,  borderRadius: 5,backgroundColor:'coral'}}>
      <CardMedia
        sx={{ maxWidth: 250, borderRadius: 100, margin: 4, marginLeft: 5 }}
        component="img"
        alt="man"
        height="250"
        image={man}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Manvith</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <em>Front-end Enthusiast</em>
        <br></br>
          <b>Department of Computer Science</b><br></br>
          <small>Hyderabad</small>
        </Typography>
      </CardContent>
    </Card>
    </center>
    </div>
  );
}