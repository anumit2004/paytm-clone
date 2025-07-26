import React, { useEffect,useState } from 'react'
import {Heading} from '../components/Heading'
import { UserMoneySending } from '../components/UserMoneySending'
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filter ,setFilter] = useState("");
  const [balance, setBalance] = useState(0); 
  const [currentuser, setCurrentUser] = useState({});
 
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  
  useEffect( ()=>{
   axios.get("http://localhost:3000/api/v1/user/bulk/me",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response)=>{
      setCurrentUser(response.data.user);
    })
  },[]);

  

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((response) => {
      setBalance(response.data.balance);
    })
    .catch((error) => {
      console.error("Error fetching balance:", error);
    });
  }, [])

  return (
    <div className='min-h-screen '>
      <div className='flex justify-between items-center shadow-sm rounded-lg p-6 '>
        <Heading label="Payments App" text_size={"text-2xl"} />
        
        <div className='flex justify-between  '>
          <div className='px-2 py-2 font-semibold text-xl'>{currentuser.firstname} {currentuser.lastname}</div>
          <div className ="bg-black w-12 h-12 rounded-full text-white flex items-center justify-center">{currentuser.firstname?.[0]?.toUpperCase() || "U"}</div>   
        </div>
      </div>
      <div className='my-3 mx-5'>
          <Heading label={`Your Balance : ₹${balance.toFixed(2)}`} text_size={"text-xl"} />
      </div>
      <div className='my-3 mx-5 text-xl font-bold'>
       Users
      </div>
      <div className='my-3 px-5'> 
        <input onChange={(e)=>{setFilter(e.target.value)}}className=' border border-gray-300 w-full p-2 rounded-md' placeholder='Search Users'></input>
      </div>
      <div className='mx-5 my-3'>
        {users.map((user) => (
          <UserMoneySending key={user._id} avatar_label={user.username[0].toUpperCase()} user_label={user.firstname+" " +user.lastname} navlink={"/send?id="+user._id+"&name="+user.firstname} /> 
        ))}
      </div>
    </div>
  )
}

export default Dashboard
