import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () =>(
  <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat)=>(
      <div key={stat.id} className={`flex flex-col md:flex-row justify-center flex-1 items-center font-poppins text-center ${stat.id=="stats-1"?'-ml-[2px] xs:border-r-2 border-dashed':'ml-0'} ${stat.id=="stats-2"?' xs:border-r-2 border-dashed':'ml-0'} gap-5 xs:ml-0`}>
        <h4 className={`font-semibold text-[30px] xs:text-[40px] text-white xs:leading-[53px] leading-[43px]`}>{stat.value}</h4>
        <p className='font-normal text-[15px] xs:text-[20px] text-gradient xs:leading-[26px] leading-[21px]'>{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats