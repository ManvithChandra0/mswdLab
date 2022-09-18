import React,{useState} from 'react'  
import Cse from './skill/Cse';  
import Ece from './skill/Ece'; 
import Me from './skill/Me';  
import Bt from './skill/Bt';  
export default function App(){  
  const [resourceType,setResourceType]=useState('')  
  return(  
    <>  
    <div className="App">  
      <button onClick={()=>setResourceType(<Cse/>)}>CSE</button> &emsp;&emsp;&emsp;&emsp;
      <button onClick={()=>setResourceType(<Ece/>)}>ECE</button>  &emsp;&emsp;&emsp;&emsp;&emsp;
      <button onClick={()=>setResourceType(<Me/>)}>ME</button>  &emsp;&emsp;&emsp;&emsp;&emsp;
      <button onClick={()=>setResourceType(<Bt/>)}>BT</button>  
    </div>  
    <h4>{resourceType}</h4>  
    </>  
  )  
}