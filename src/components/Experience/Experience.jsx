import React from 'react'
import './Experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>HTML</h4>
          
              </div>
              

            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              
              </div>

            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>React</h4>
            
              </div>

            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
          
              </div>

            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>C#</h4>
              
              </div>

            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>MYSQL</h4>
              
              </div>

            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              
              </div>

            </article>
            <article className='experience__details'>
              
              <div>
              <h4></h4>
        
              </div>

            </article>
          </div>
        </div>

      </div>

      
    </section>
  )
}

export default Experience