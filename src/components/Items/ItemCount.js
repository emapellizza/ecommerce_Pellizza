import React, { useState } from 'react';
import './Items.css'

export default function Stock ({data}){
    //data es el stock total disponible 
    data = 5;
   
    const [count,setCount] = useState (data)

    console.log("contador",count);

   

    const addStock = ()=>{
        if(count>0){
         setCount(count-1)
        }  //saca del stock
    }

    const removeStock = ()=>{
        if(count<data)
        setCount(count+1)//devuelve al stock
    }
    return (
        <div>

            <button onClick={addStock}>add</button>
            <button onClick={removeStock}>remove</button>
            
        </div>
    )
}
