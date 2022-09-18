import React from 'react'
import man from './cafe/img/man.jpg'
function Mang() {

  const mble=[{ 
        "img":<img src={man} width="150" height="150"/>
    }
]
return(
    <div class="column">
    {mble.map((mb) => (<h6 key={mb.id}>{mb.img}<br/> </h6>))} 
    </div>
)
}
export default Mang