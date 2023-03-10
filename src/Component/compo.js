import React from "react";
import {useState} from 'react';

function SimpleCompo(){
    const [name,setName]=useState("")
    return(
        <>
        <h1 style={{color:'brown'}}>My name is {name}</h1>
        <button onClick={()=>setName('harry')}>Change</button>
        </>
    )
}

export default SimpleCompo;