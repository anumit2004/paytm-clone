import React from 'react';
import {useNavigate} from 'react-router-dom'

export function UserMoneySending({avatar_label ,user_label , navlink}) {
  const navigate = useNavigate();

  return (
    <div className = "flex justify-between items-center py-1">
        <div className = "text-xl my-1 flex items-center">
            <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg font-bold text-lg'>
                {avatar_label}
            </div>
            <div className='ml-2 text-gray-800 text-xl font-semibold'>
                 {user_label}
            </div>
        </div>
        <div>
            <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600' onClick={()=>{
                navigate(navlink);
            }}>Send Money</button>
        </div>

    </div>
  );
}
