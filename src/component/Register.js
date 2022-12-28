import { useEffect, useState } from "react"

const Register=(props)=>{
    const [inputEmail, setInputaEmail] = useState('')
    const [inputPassword, setInputaPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [passMtchStatus,setPassMtchStatus] = useState(true)

    useEffect(()=>{
        if(inputPassword !== confirmPassword) setPassMtchStatus(false)
        else  setPassMtchStatus(true)
    },[confirmPassword])

    function onsunmitFun(e){
        e.preventDefault()
        console.log('onsubmit')
      }    
    return (
        <div className='Reagister-container'>

<h3>SING UP</h3>
          <form onSubmit={onsunmitFun}>
            email:
            <input type='email' onChange={(e)=>setInputaEmail(e.target.value)}/><br/>
            password:
            <input type='password' onChange={(e)=>setInputaPassword(e.target.value)}/><br/>
            Confirm password:
            <input type='password' onChange={(e)=>setconfirmPassword(e.target.value)}/><br/>
            {!passMtchStatus ? <p style={{"color":"red"}}>Password Notmatched</p> : <></>}
            <button type="submit">SING UP</button>            
          </form>    
      </div>
    )
}

export default Register;