import React from 'react';
import { makestyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useState} from 'react'
import {ComputerScience} from'./skill/assets/data'
import {Electrical} from './skill/assets/data'
import {Mechanical} from './skill/assets/data'
import {BioTech} from'./skill/assets/data'
import './skill3c.css'
const useStyles = makestyles ((theme) => ({
root:{
    '& > *':{
        margin: theme.spacing(),
    },
},
 } ));
export default function Demo()
{
const classes = useStyles();
const[department, setDepartment ] = useState(ComputerScience)
const display = (department) =>
{
setDepartment (department)
}
return (
    <div className={classes.root}>
    <h2>MSWD SKILLING EXPERIMENT3</h2>
    <Button variant="contained" color="secondary" onclick={() => display (ComputerScience)}>CSE</Button>
    <Button variant="contained" color= "primary" onclick={() => display (Electrical)}>ECE</Button>
    <Button variant="contained" color="secondary" onClick={() => display(Mechanical)}> ME</Button>
    <Button variant="contained" color="primary" onclick={() => display(BioTech)}>BT </Button>
    <p>{department[0].displayName}</p>
    <img src={department[0].imageurl} width="950" height="350" className="skill3-header"/>
    <p>{department[0].description}</p>
    <p align="left" style={{color: 'red'}}>
    {department[0] .programsOffered.map((program) =>{
    return <li>{program}</li>
})
}
    </p>
    <h2><b>HEAD OF THE DEPARTMENT: {department[0].hod}</b></h2>
    </div>
    );
    }