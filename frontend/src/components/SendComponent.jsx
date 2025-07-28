import React from 'react';


export function SendComponent({avatar_label ,user_label}) {
  return (
    <div className = "flex justify-between items-center mt-5">
        <div className = "text-xl my-1 flex items-center">
            <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg font-bold text-lg'>
                {avatar_label}
            </div>
            <div className='ml-2 text-gray-800 text-xl font-semibold'>
                 {user_label}
            </div>
        </div>

    </div>
  );
}
