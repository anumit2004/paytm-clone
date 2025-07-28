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
    <div className='flex justify-center items-center min-h-screen  py-4 bg-gradient-to-br from-blue-200 to-indigo-500'>
            {/* Background decorative elements */}
        <div className='fixed inset-0 pointer-events-none z-0'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
            <div className='absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
            <div className='absolute -bottom-40 -right-10 w-80 h-80 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
            <div className='absolute  -top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-6000'></div>
        </div>
        <div className='text-center  w-96 bg-white shadow-md rounded-lg p-6 max-w-md mx-4 backdrop-blur-md bg-white/30'>
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
                }} bgColor='bg-gradient-to-r from-blue-500 to-purple-600' hoverColor="hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 hover:scale-105"/>
            </div>
            <div>
                <BottomWarning label="Already have an account? " linkLabel="Sign In" link="/signin" />
            </div>
        </div>
      
    </div>
  )
}

export default Signup
