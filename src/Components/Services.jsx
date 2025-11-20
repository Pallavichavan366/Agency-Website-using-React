import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services=()=> {

    const servicesData =[
        {
            title: 'Advertising',
            description:'We create ads that speak, connect, and convert, turning ideas into real growth',
            icon: assets.ads_icon
        },
         {
            title: 'Content marketing',
            description:'We turn ideas into powerful digital solutions that connect,engage....',
            icon: assets.marketing_icon
          
        },
        {
            title: 'Content writing',
            description:'We write clear, engaging content that communicates your brand’s message with impact.',
            icon: assets.content_icon
          
        },
        {
            title: 'Social Media',
            description:'We manage social media that engages your audience and grows your online presence.',
            icon: assets.social_icon
          
        },
        
    ]  
  return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4 sm:px-12 
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} alt="" className=' absolute -top-110  -left-70 -z-1 dark:hidden '/>
    <Title title=' How can we help ?' desc='From Strategy to  execution, we craft digital solution that move your bussiness forward.'/>

<div className=' flex flex-col md:grid grid-cols-2'>
  {servicesData.map((service,index)=>(
    <ServiceCard key={index} service={service} index={index}/>
  ))}
</div>


    </div>
  )
}

export default Services
