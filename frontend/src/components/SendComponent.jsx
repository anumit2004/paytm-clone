import React from 'react';


export function SendComponent({avatar_label ,user_label}) {
  return (
    <div className = "flex justify-between items-center mt-5">
        <div className = "text-xl my-1 flex items-center">
            <div className='bg-green-500 px-4 py-2  rounded-full text-white'>
                {avatar_label}
            </div>
            <div className='ml-2 text-gray-800 text-xl font-semibold'>
                 {user_label}
            </div>
        </div>

    </div>
  );
}
