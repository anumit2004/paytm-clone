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
    <div className='flex justify-center items-center h-screen bg-gray-300'>
      <div className='text-center  w-96 bg-white shadow-md rounded-lg p-6 bg-gray-100'>
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
        <div>
          <Button onClick={
             ()=>{
               axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: userId,
                amount: parseFloat(amount)
              },{
                headers:{
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
              alert("Money sent successfully!");
              navigate("/dashboard");
              
            }
          }  label="Send Money" bgColor='bg-green-500' hoverColor='hover:bg-green-700' />
        </div>
      </div>
    </div>
  )
}

export default Send
