
import { useNavigate } from "react-router-dom";
const Create=(props)=>{
    const navgate = useNavigate()
    
    return (
        <div className='book-container'>
            <h5>Create Page</h5>
            <form>
                title:
                <input type='text'/> <br/>
                image:
                <input type='file'/><br/>
                Describsion:
                <input type='text'/><br/>

                <button type="submit" onClick={()=>{navgate('../home')}}>SAVE POST</button>

            </form>


    
      </div>
    )
}

export default Create ;