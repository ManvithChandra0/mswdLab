import React from 'react'
import m1 from  './cafe/img/m1.jpg'
import m2 from  './cafe/img/m2.jpg'
function Laptops() {
    const mble=[{ 
        "img":<img src={m1} width="250" height="150"/>, 
      "model":"M1", 
      "name":"macbook air m1", 
      "price":"$1000/-", 
      "available":true
    },
    {
        "img":<img src={m2} width="250" height="150"/>, 
      "model":"M2", 
      "name":"macbook air m2", 
      "price":"$1800/-", 
      "available":false
    }

]
    return(
        
        <div class="column">
        <h3>Laptops</h3>
        {mble.map((mb) => (<h6 key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
        Available: {mb.available 
     ?"Yes" : "No"}</h6>))} 

        </div>
    )
}
export default Laptops