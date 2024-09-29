import React from 'react'
function Footerelem() {
  var data= ["About","Services","Features","Latest News"];
  var dataa= ["FAQ's","Privacy Policy","Company Policy","Refund Policy","Terms & Conditions","Team","Contact US"];
  var dataaa=["4th floor, Sri Varasiddi Enclave, near Punjab National Bank, Arunodaya Colony, Jaihind Enclave, Madhapur,Hyderabad, Telangana 500081, India","4th floor, GMR & GS complex, Kishanpura, Hanamkonda,Telangana, 506001, India"];
  return (
    <div className='footer2 h-full w-full flex gap-32 pl-32 '>
      <div className='footer22'>
        <h1 className=' text-sky-900 font-semibold mb-4'>Company</h1>
        <ul className='w-full' >
          {data.map((item,index)=><li className='footer222 text-sky-600 leading-7'>{item}</li>)}
        </ul>
      </div>
      <div className='footer22'>
        <h1 className='text-sky-900 font-semibold mb-4'>Support</h1>
        <ul className='w-full'>
          {dataa.map((item,index)=><li className='footer222 text-sky-600 leading-7'>{item}</li>)}
        </ul>
      </div>
      <div className='footer22'>
        <h1 className='text-sky-900 font-semibold mb-4'>Address</h1>
        <ul>
          {dataaa.map((item,index)=><li className=' text-sky-600 leading-7'>{item}</li>)}
        </ul>
      </div>
    </div>    
    )
}

export default Footerelem
