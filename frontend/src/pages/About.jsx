import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
<div className='text-2xl text-center pt-8 border-t'> 
  <Title text1={'ABOUT'} text2={'US'}/>
  </div>   
  <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='-w-full md:max-w-[450px]'  src={assets.about_img} alt="" />
  <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio eligendi rerum numquam quae corrupti, officia optio. Similique, quidem sunt assumenda ea explicabo neque illum blanditiis voluptas sapiente sequi ad.</p>
  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, est quod ratione voluptatem facilis, sit hic facere cum ullam odit qui fugiat veritatis aliquid cumque eum quia excepturi ducimus eius.</p>
  <b tex-gray-800>OUR MISSION</b>
  <p> our mission at trendwear is to empower customer with choice convience</p>
  </div>
  </div>
 </div>
  )
}

export default About
