import React from 'react';
import {Heading} from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { InputBox } from '../components/InputBox';
import { Button } from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMoney =()=>{
    const [amount, setAmount] = React.useState('');
    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 relative overflow-hidden'>
            {/* Background decorative elements */}
          <div className='fixed inset-0 pointer-events-none z-0'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
            <div className='absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
            <div className='absolute -bottom-40 -right-10 w-80 h-80 bg-gradient-to-br from-green-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
            <div className='absolute  -top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-6000'></div>
          </div>

          <div className='relative z-10 flex justify-center items-center min-h-screen'>
            <div className='text-center w-96 backdrop-blur-md shadow-md rounded-lg p-6 bg-white/30'>
                <Heading label="Add Money" text_size="text-3xl" />
                <div>
                    <SubHeading label="Enter the amount you want to add to your wallet" />
                </div>
                <div>
                    <InputBox label="Amount" placeholder="Enter amount" onChange={(e)=>{setAmount(e.target.value)}} />
                </div>
                <div className='py-2 pt-5 mt-2'>
                    <Button label="Add Money"onClick={async ()=>{
                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/account/addmoney",{
                                amount:parseFloat(amount),
                            },{
                                headers:{
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                }
                            });
                            alert(`Money added successfully!`);
                            navigate("/dashboard");
                        } catch (err) {
                            alert("Failed to add money: " + (err.response?.data?.message || err.message));
                        }
                    }} bgColor='bg-gradient-to-r from-blue-500 to-purple-600' hoverColor="hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 hover:scale-105"/>
                </div>
            </div>
            
          </div>
        </div>
    )
}

export default AddMoney;