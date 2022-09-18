import React from 'react' 
import { makeStyles } from '@material-ui/core/styles' 
import one from './images/man.jpg' 
import i from './images/m1.jpg' 
import { 
    Grid, 
    Card, 
    Button, 
    CardMedia, 
    CardContent, 
    Typography, 
    CardHeader, 
    CardActionArea 
} from '@material-ui/core/' 
 
const useStyles = makeStyles(theme => ({ 
    root: { 
       
 
        flexGrow: 1, 
         
        padding: theme.spacing(5) 
    } 
})) 
 
export default function Icard() { 
    const classes = useStyles() 
    const mble = [ 
        { pic:'./images/one.jpg', model: 9, name: "One Plus",price:50000,available: true }, 
        
         
    ] 
    return ( 
        <div className={classes.root}> 
            <Grid 
                container 
                spacing={2} 
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            > 
                {mble.map(mb => ( 
                    <Grid item xs={12} sm={6} md={3} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={one}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                    {mb.name} 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>Model Number:  {mb.model}</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>Model Number:  Rs. {mb.price}/-</b> 
                                </Typography> 
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Buy Now</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))} 
            </Grid> 
        </div> 
    )}