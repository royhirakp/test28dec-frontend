import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
const Create=(props)=>{
    const [title, setTitle] = useState('')
    const [describtion, setDescribtion] =useState('')
    const navgate = useNavigate()
    const [loader, setLoder] = useState(false)

    async function onSubmitf (e){
        e.preventDefault()     
        setLoder(true) 
        try {
            const body = {
                title : title,
                describtion : describtion
            }
            const config = {
                headers: {
                    authorization : localStorage.getItem('logToken')                      
                }
            }
            const res = await axios.post('https://dec-k5lr.onrender.com/blog',body,config)
                console.log(res)       
        } catch (error) {
            console.log(error)
        }
        setLoder(false)
        navgate('/home')
    } 

    return (
        <div className='book-container'>
            <h5>Create Page</h5>
            <form onSubmit={onSubmitf}>
                title:
                <input type='text' onChange={(e)=>setTitle(e.target.value)}/> <br/>
                image:
                <input type='file'/><br/>
                Describsion:
                <input type='text'  onChange={(e)=>setDescribtion(e.target.value)}/><br/>
                <button type="submit" >SAVE POST</button>
            </form>    
            {loader ? <Loader /> : <></>}
      </div>
    )
}

export default Create ;