import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { SendComponent } from '../components/SendComponent'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Send = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const userName = searchParams.get("name");
  const [amount, setAmount] = useState('');
  return (
    <div className='flex justify-center items-center h-screen min-h-screen bg-gradient-to-br from-blue-300 to-indigo-800 relative overflow-hidden '>
        {/* Background decorative elements */}
          <div className='fixed inset-0 pointer-events-none z-0'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
            <div className='absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
            <div className='absolute -bottom-40 -right-10 w-80 h-80 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
            <div className='absolute  -top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-6000'></div>
          </div>

      
      <div className='text-center  w-96  backdrop-blur-md shadow-md rounded-lg p-6 bg-white/30'>
        <div>
          <Heading label="Send Money" text_size={"text-4xl"} />
        </div>
        <div className='mt-10'>
          <SendComponent avatar_label={userName?.[0]?.toUpperCase() || "U"} user_label={userName} />
        </div>
        <div>
          <InputBox onChange={(e)=>{
            setAmount(e.target.value);
          }} label="Amount" placeholder="Enter amount to send" />
        </div>
        <div className='py-2 pt-5 mt-2'>
        <Button label="Send Money" onClick={async ()=>{
            try {
                const response = await axios.post("http://localhost:3000/api/v1/account/transfer",{
                    to: userId,
                    amount:parseFloat(amount),
                },{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                alert(`Money transferred successfully!`);
                navigate("/dashboard");
            } catch (err) {
                alert("Failed to transfer money: " + (err.response?.data?.message || err.message));
            }
        }} bgColor='bg-gradient-to-r from-blue-500 to-purple-600' hoverColor="hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 hover:scale-105"/>
                </div>
      </div>
    </div>
  )
}

export default Send
