import React from 'react'
import { useParams } from 'react-router-dom'
import { Datapage } from '../Blog/Datapage'
import './DetailBlog.css'
export default function DetailBlog() {
  const {IdParms}=useParams()
  const singleDetailPost=Datapage.find((prev)=>prev.id==parseInt(IdParms))
  return (
    <div className='DetailBlogcont'>
      <h1>Blog Details</h1>  
      <h4>  {singleDetailPost.titel}</h4>
      <p>{singleDetailPost.description}</p>
      
    </div>
  )
}
