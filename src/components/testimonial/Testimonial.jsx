import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data= [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Very professional'
  },
  {
    avatar:AVTR2,
    name:'Michael Scott',
    review:'Such a great portofolio'
  },
  {
    avatar:AVTR3,
    name:'Jon Snow',
    review:'Very informative'
  },
  {
    avatar:AVTR4,
    name:'Sala Abdul',
    review:'I am amazed'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatari1" />
           </div>
           <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}
              </small>
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>

    </section>
  )
}

export default Testimonial