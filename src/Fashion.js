import React from 'react'
import hi from './cafe/img/hi.jpg'
import n2 from './cafe/img/n2.jpg'
function Fashion() {
    const mble=[{ 
        "img":<img src={hi} width="150" height="150"/>, 
        "model":"jordan", 
        "name":"air1", 
        "price":"Rs. 50,000/-", 
        "available":true 
    },
    { 
        "img":<img src={n2} width="150" height="150"/>, 
      "model":"Jordan", 
      "name":"air2", 
      "price":"$1500/-", 
      "available":true
    },

]
    return(
        <div class="column">
                    <h3>Shoes</h3>

        {mble.map((mb) => (<h6 key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
        Available: {mb.available 
     ?"Yes" : "No"}</h6>))} 

        </div>
    )
}

export default Fashion