import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <div className='flex justify-center items-center min-h-screen  py-4 bg-gray-300'>
        <div className='text-center  w-96 bg-white shadow-md rounded-lg p-6 max-w-md mx-4 bg-gray-100 '>
            <div>
                <Heading  label="Sign Up" text_size={"text-4xl"}  />
            </div>
            <div>
                <SubHeading  label="Enter your information to create an account" />
            </div>
             <div>
                <InputBox label="Username" placeholder="john.doe@2011" onChange={(e)=>(setUsername(e.target.value))} />
            </div>
            <div>
                <InputBox label="Password" placeholder="123456" onChange={(e)=>(setPassword(e.target.value))} />
            </div>
            <div>
                <InputBox label="First Name" placeholder="John" onChange={(e)=>(setFirstname(e.target.value))} />
            </div>
            <div>
                <InputBox label="Last Name" placeholder="Doe" onChange={(e)=>(setLastname(e.target.value))} />
            </div>
        
            <div>
                <Button label="Sign Up" onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username: username,
                        password: password,
                        firstname: firstname,
                        lastname: lastname
                    })
                    localStorage.setItem("token",response.data.token);
                    alert("Sign up successful!");
                    navigate("/dashboard");
                    
                    // localStorage.removeItem("token");
                }} />
            </div>
            <div>
                <BottomWarning label ="Already have an account? " linkLabel="Sign In" link="/signin" />
            </div>
        </div>
      
    </div>
  )
}

export default Signup
