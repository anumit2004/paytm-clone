import React from 'react'
import { useState } from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000'></div>
      </div>
       <div className='text-center  w-96 bg-white shadow-md rounded-lg p-6 bg-gray-100'>
          {/* Welcome icon */}
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
              <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
              </svg>
            </div>
          </div>
            <div>
                <Heading  label="Sign In" text_size={"text-4xl"} />
            </div>
            <div>
              <SubHeading  label="Enter your information to access your account" />
            </div>
            <div>
              <InputBox label="Username" placeholder="john@2004" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <InputBox label="Password" placeholder="123456" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <Button label="Sign In"  onClick={async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                  username: username,
                  password: password
                })
                  
                  localStorage.setItem("token", response.data.token);
                  alert("Sign in successful!");
                  navigate("/dashboard");
                
              }}/>
            </div>
            <div>
              <BottomWarning label ="Don't have an account? " linkLabel="Sign Up" link="/signup" />
            </div>
            
       </div>
    </div>
  )
}

export default Signin
