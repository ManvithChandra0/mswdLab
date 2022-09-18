import React from 'react'
import egg from './img/egg.jpg'
import chic from './img/chic.jpg'
import sam from './img/sam.jpg'
import cof from './img/cof.jpg'
import sp from './img/sp.jpg'


function Img1() {
  const mble=[{ 
        "img":<img src={egg} width="150" height="150"/>,  
        "name":"Egg Puff", 
        "price":"Rs. 50/-", 
        "available":true 
    },
    { 
      "img":<img src={chic} width="150" height="150"/>, 
      "name":"Chicken Puff", 
      "price":"Rs. 60/-", 
      "available":true
    },
    {
    "img":<img src={sam} width="150" height="150"/>, 
    "name":"Samosa", 
    "price":"Rs. 40/-", 
    "available":true 
    },
    {
        "img":<img src={cof} width="150" height="150"/>, 
        "name":"Coffee", 
        "price":"Rs. 35/-", 
        "available":false
    },
    {
    "img":<img src={sp} width="150" height="150"/>, 
    "name":"Sprite", 
    "price":"Rs. 50/-", 
    "available":true 
    }

]
return(
    <div class="column">
    {mble.map((mb) => (<h6 key={mb.id}>{mb.img}<br/> Name:{mb.name}<br/>Price:{mb.price}<br/> 
    Available: {mb.available  ?"Yes" : "No"}</h6>))} 
    </div>
)
}
export default Img1