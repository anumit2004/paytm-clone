import React from 'react';
import {useNavigate} from 'react-router-dom'

export function UserMoneySending({avatar_label ,user_label , navlink}) {
  const navigate = useNavigate();

  return (
    <div className = "flex justify-between items-center py-1">
        <div className = "text-xl my-1 flex items-center">
            <div className='bg-gray-300 px-4 py-2 w-12 h-12 rounded-full flex items-center justify-center'>
                {avatar_label}
            </div>
            <div className='ml-2 text-gray-800 text-xl font-semibold'>
                 {user_label}
            </div>
        </div>
        <div>
            <button className='bg-black text-white font-semibold px-4 py-2 rounded-xl hover:bg-gray-700' onClick={()=>{
                navigate(navlink);
            }}>Send Money</button>
        </div>

    </div>
  );
}
