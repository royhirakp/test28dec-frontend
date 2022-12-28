import Blog from "./Blog";
import { useNavigate } from "react-router-dom";


const Home=(props)=>{
    const navgate = useNavigate()
    return (
        <div className='Home-container'>
            <h3>Home</h3>
            <nav>
                <p style={{Display:"inline-block"}}>Logo</p>
                <button onClick={()=>{navgate('../create')}}>create</button>
                <button onClick={()=>{navgate('../')}}>LogOut</button>
            </nav>
            <div className="Blog" >
                <><Blog/></>

            </div>

    
      </div>
    )
}

export default Home ;