import React from 'react'
import './LinkHeader.css'
import { Link } from 'react-router-dom'
import { MdLightMode,MdNightlightRound } from "react-icons/md";
import WriteBlog from '../WriteBlog/WriteBlog.jsx'
import { useState } from 'react';

export default function LinkHeader({Mode,UpdateMode}) {
  const [isWriteBlog,seyisWriteBlog]=useState(false)
   
  function updateWriteBlog(){
    seyisWriteBlog(!isWriteBlog)
  }
 
  return (
    <>
    <nav>
        <h1>C/raxmaan</h1>
        <ul>

            <Link className='Link'  to="/">Blog</Link>
            <Link className='Link' to="About">About</Link>
            
            
            <Link className='Link' onClick={updateWriteBlog}>WriteBlog</Link>
      
        </ul>
        <h1 onClick={UpdateMode} >{Mode?<MdLightMode/> :<MdNightlightRound/>}</h1>
      
    </nav>
    {isWriteBlog?<WriteBlog updateWriteBlog={updateWriteBlog}/>:""}
    </>
  )
}
