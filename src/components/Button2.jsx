import React from 'react'

function Button2({elem}) {
  return (
    <div className='btn22 flex justify-start items-center text-[#468DB6] text-sm h-[40px] w-full bg-[#fff]'>
        <span className='text-zinc-600 m-2 text-xl'>{elem.icon}</span>
        <h6>{elem.h6}</h6>
    </div>
  )
}

export default Button2