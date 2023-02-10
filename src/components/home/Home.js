import React, { useEffect, useState } from 'react'
import Blog from "../card/Blog";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Loader from '../old_components/Loader';

// import useHistory from 'react-router-dom'
const Home=()=>{
    const navgate = useNavigate()
    const [data , setData]=useState([])
    const [loader, setLoader] = useState(false);
    // const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('logToken')){
            navgate('/')
        }
    },[])
    useEffect(()=>{
        async function datafunction () {
            setLoader(true)
            try {
                const config = {
                    headers: {
                        authorization : localStorage.getItem('logToken')                      
                    }
                }
                const res = await axios.get ('https://hirakp-fullstackblog-post-prt1.onrender.com/blog',config)
                    setData(res.data.blog) 
                    console.log(res.data.blog)       
            } catch (error) {
                console.log(error)
            }
            setLoader(false)
        }
        datafunction()
    },[])

    function LogOut (){
        // history.push('/login')
        localStorage.removeItem('logToken')
        navgate('/') //
    }
   
    return (
        <div className='Home-container'>
            <h3>Home</h3>
            <nav>
                <p style={{Display:"inline-block"}}>Logo</p>
                <button onClick={()=>{navgate('../create')}}>create</button>
                <button onClick={LogOut}>LogOut</button>
            </nav>
            <div className="Blog" >
    
                {data.map((item,i)=>{
                        return (
                        <Blog key={i*.00215*0.25} data={item}/>
                        )
                    })} 

            </div>
            {/* <Loader/> */}
            {loader?<Loader/>:<></>}    
      </div>
    )
}

export default Home ;