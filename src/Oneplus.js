import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import one from './cafe/img/one.jpg'
import { Button } from '@mui/material';
export default function Id() {

  return (<div  >
    <h1>Welcome To Shopping World</h1>
    <div style={{display:'flex',flexWrap:'noWrap'}}>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      
      <CardMedia
      
        sx={{ maxWidth: 250 }}
        component="img"
        alt="man"
        height="250"
        image={one}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>Oneplus</b><br></br>
        <b>Model Number: 9 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 50000/-</b><br></br>
          <b>Available: Yes</b>
          <br></br>
          <Button variant="contained">BUY NOW</Button>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 250 }}
        component="img"
        alt="man"
        height="250"
        image={one}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Oneplus</b><br></br>
        <b>Model Number: 9 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 50000/-</b><br></br>
          <small>Available: Yes</small><br></br>
          <Button variant="contained">BUY NOW</Button>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 250 }}
        component="img"
        alt="man"
        height="250"
        image={one}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Oneplus</b><br></br>
        <b>Model Number: 9 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 50000/-</b><br></br>
                    <b>Available: Yes</b>
          <br></br>
          <Button variant="contained">BUY NOW</Button>
        </Typography>
      </CardContent>
    </Card>
    </div>
    <h3>Copy Rights Reserved By Manvith Chandra</h3>
    </div>
    
  );
}