import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`bg-blue-gradient h-[140px] w-[140px] rounded-full ${styles.flexCenter} p-[2px] cursor-pointer hover:scale-105 relative`}>
    <div className={`${styles.flexCenter} w-full h-full bg-primary rounded-full flex-col z-0`}>
      <div className='flex gap-1 items-center'>
        <p className='text-gradient font-semibold text-[18px]font font-poppins leading-[23px] mr-1'>Get</p>
        <img src={arrowUp} className='h-6 w-6'/>
      </div>
      <p className='text-gradient font-semibold text-[18px]font font-poppins leading-[23px]'>Started</p>
    </div>
    
  </div>
)
export default GetStarted
