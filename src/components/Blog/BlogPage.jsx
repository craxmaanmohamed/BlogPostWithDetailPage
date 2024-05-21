import './blogPage.css'
import BackroundWaveBlogs from '../BackroundWave/BackroundWaveBlogs'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Datapage } from './Datapage'
export default function BlogPage() {
  return (
  <>
<BackroundWaveBlogs/>
   <div className="BlogpostsContainer">
   <h1>Blog posts</h1>
   <div className="DisplayBlogContainer">
     {Datapage.map((Data,id)=>(
       <div key={id} className="singleBlogPosts">
       <div className="divimg">
       <img className='singleBlogPostsImg'  src="/Post.png" alt="" />
       </div>
       <h2>{Data.titel}</h2>
       <p>{Data.description.substring(0,90)+"..."}</p>
       <Link to={`BlogPage/${Data.id}`}> <span className='ReadMore'>Read More {<FaArrowRightLong/>}</span></Link>
     
     </div>
      
     ))}
     </div>
   </div>

 

  </>
  )
}
