import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loader from '../old_components/Loader';
const Create=(props)=>{
    const [title, setTitle] = useState('')
    const [describtion, setDescribtion] =useState('')
    const [imageFile, setImageFile] = useState('')
    const navgate = useNavigate()
    const [loader, setLoder] = useState(false)
    async function onSubmitf (e){
        e.preventDefault();   
        setLoder(true) 
        // console.log(imageFile.name,'<======imagefile.name')
        // console.log(imageFile,'<======imagefile')
        // console.log(title,'<======title')
        // console.log(describtion,'<======describtion')

        const formData = new FormData();    
        formData.append('image',imageFile,imageFile.name);
        formData.append('title',title);
        formData.append('describtion',describtion);
        console.log(formData)

        try {
            const config = {
                headers: {
                    authorization : localStorage.getItem('logToken')                       
                }
            }

            const res = await axios.post('https://hirakp-fullstackblog-post-prt1.onrender.com/blog',formData,config)
                console.log(res,'<=image post axios')       
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
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/>
                image:
                <input type='file' name='image' onChange={(e)=>setImageFile(e.target.files[0])}/><br/>
                Describsion:
                <input type='text' name='describtion' value={describtion} onChange={(e)=>setDescribtion(e.target.value)}/><br/>
                <button type="submit" >SAVE POST</button>
            </form>    
            {loader ? <Loader /> : <></>}
      </div>
    )
}

export default Create ;