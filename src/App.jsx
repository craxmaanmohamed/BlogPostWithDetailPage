import {  Routes, Route,Link } from 'react-router-dom';
import './index.css'
import LinkHeader from './components/LinkThePages/LinkHeader';
import WriteBlog from './components/WriteBlog/WriteBlog';
import BlogPage from './components/Blog/BlogPage'
import About from './components/About/About'
import DetailBlog from './components/DetailComponents/DetailBlog';
import useLocalStorage from 'use-local-storage';

function App(){
  //toggle the Mode
  const [Mode,setMode]=useLocalStorage(false)
  function UpdateMode(){
      setMode(!Mode)
  }


  return(
   <div themmode={Mode?"Dark":"Light"}>
    <LinkHeader Mode={Mode} UpdateMode={UpdateMode}/>

     <Routes>
     <Route path='/' element={<BlogPage/>}></Route>
     <Route path='/About' element={<About/>}></Route>
     <Route path='/WriteBlog' element={<WriteBlog/>}></Route>
     <Route path='/BlogPage/:IdParms' element={<DetailBlog/>}></Route>
     </Routes>
   </div>
      
  
  )
}
export default App