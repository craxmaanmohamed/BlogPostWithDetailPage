import { useState } from 'react';
import BlogPage from '../Blog/BlogPage';
import './WriteBlog.css'
const WriteBlog = ({updateWriteBlog}) => {
  const [titles, addTitle ] = useState([]); // Access context values
  const [newTitle, setNewTitle] = useState('');

// handle data function
  const handleData = (event) => {
    setNewTitle(event.target.value);
  };

// Add Blog function
  function addBlog() {
    if(newTitle.trim() !="" ){
      addTitle([...titles,newTitle]);
      setNewTitle(''); 
      updateWriteBlog();
    }
    else{
      alert("sory enter Titel")
    }
  };

  return (
  <div className="MainWriteBlog">
     <div className="WriteBlogContainer">
        
      <h1>Write The Blogs</h1>
      <div className="inputs">
        <input type="text" value={newTitle} onChange={handleData} placeholder='Write titel'/>
        <input type="file"  accept="image/*" className="file" placeholder='Image' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Write Detail'></textarea>
      </div>
      <div className="buttons">
  
        <button className="Add"  onClick={addBlog}  >
          Add 
        </button>
        <button className="Close" onClick={updateWriteBlog} >
          Close 
        </button>
      </div>
    </div>

  </div>

   
  );
};

export default WriteBlog;
