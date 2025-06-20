import React from 'react'

const Dark = () => {
  return (
   
    <div className='w-[500px] h-[500px] bg-black shadow-[0_4px_10px_rgba(0,0,0,0.2)] mt-[50px]'>
      <div className='w-[300px] h-[300px] flex ml-[100px] mt-[100px] rounded-[5px]  shadow-[0_4px_6px_rgba(255,255,255,0.5)] bg-grey'>
        <div>
        <p className='mt-[5px] text-white '>Hello my name is: name </p>
        <p className='mt-[5px] text-white'>This is the day: 12.12.2024 </p>
        <p className='mt-[5px] text-white'>A random number from 0 to 100: </p>
        <p className='text-[65px] ml-[110px] mt-[50px] text-white'>77</p>
        </div>
      </div>

    </div>
  );
};
  

export default Dark