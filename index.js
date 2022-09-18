/*const path = require('path');
const express = require('express');
const users=require('./Users');
const app = express()
const idFilter = req => member => member.id === parseInt(req.params.id);
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => res.send('npm run dev '))
app.get('/about', (req, res) => res.send('app.use'))
app.get('/api/users',(req,res)=>res.json(users));
app.get('/api/users/:id',(req,res)=>res.json(users.filter(u=>u.id===parseInt(req.params.id))));
app.listen(3001, () => console.log('Server ready'))*/
const path = require('path');
const express = require('express');
const users=require('./Users');
const app = express()
const idFilter = req => member => member.id === parseInt(req.params.id);
const uuid=require('uuid');
app.use(express.static(path.join(__dirname,'public')));
// Body Parser Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('npm run dev '))
app.get('/about', (req, res) => res.send('app.use'))
app.get('/api/users',(req,res)=>res.json(users));
app.get('/api/users/:id',(req,res)=>res.json(users.filter(u=>u.id===parseInt(req.params.id))));
// GET Specific USER Based on ID 
app.get('/api/users/:id', (req, res) => { 
    const found = users.some(idFilter(req)); 
   
    if (found) { 
      res.json(users.filter(idFilter(req))); 
    } else { 
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` }); 
    } 
  });
//CREATE A NEW USER  
app.post('/api/users',(req,res)=>{ 
    const newMember={ 
      id: uuid.v4(), 
      name: req.body.name, 
      email: req.body.email, 
      status: 'guest' 
 
    }; 
    if(!newMember.name || !newMember.email){ 
      return res.status(400).json({msg:'NAME and EMAIL Must be provided'}); 
    } 
    users.push(newMember); 
    res.json(users); 
 
  } 
  );
  //UPDATE Specific USER Based on ID 
app.put('/api/users/:id',(req,res)=> 
{ 
    const found = users.some(member=>member.id===parseInt(req.params.id)); 
 
  if(found) 
  { 
    const updMember=req.body; 
    users.forEach( 
        member=>{ 
            if(member.id===parseInt(req.params.id)) 
            { 
                member.name=updMember ? updMember.name : member.name; 
                member.email=updMember.email ? updMember.email : member.email; 
            res.json({msg:'Updated Details',member}) 
              } 
        } 
    ); 
  } 
  else{ 
    res.status(400).json({msg:'No User found with ${req.params.id}'}); 
  } 
});
  app.listen(3001, () => console.log('Server ready'));