import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login=(props)=>{
  const [inputEmail, setInputaEmail] = useState('')
  const [inputPassword, setInputaPassword] = useState('')

  const navgate = useNavigate()
  function onsunmitFun(e){
    e.preventDefault()
    console.log('onsubmit')





    navgate('./home')
  }

    
    return (
        <div className='Login-container'>
          <h3>LOGIN</h3>
          <form onSubmit={onsunmitFun}>
            email:
            <input type='email' onChange={(e)=>setInputaEmail(e.target.value)} />
            {/* {emailVaild ? <p>please Enter Valid Email</p> : <></>} */}
            password:
            <input type='password' onChange={(e)=>setInputaPassword(e.target.value)}/>
            <button type="submit" >Login</button>
            
          </form>
          <input type='checkbox'/>Remember me? <br/>
            Need an accout? <Link to="/register"><p>SingUp</p></Link>

    
      </div>
    )
}

export default Login ;