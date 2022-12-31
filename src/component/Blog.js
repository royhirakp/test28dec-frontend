import React from 'react'
import './Blog.css'
import ReadmoreLess from './ReadmoreLess'

const Blog=(props)=>{
    const{title,date, describtion} = props.data    
    return (
        <div className='Blog-container'>
            <h2>blog</h2>
            <h3>title:{title}</h3>
         <p>describtion:
            <ReadmoreLess>
            {describtion} 
            </ReadmoreLess>
            </p> 
         <p>Date: {date}</p>   
      </div>
    )
}

export default Blog;