import React from 'react'
import './About.css'
import ME from '../../assets/My project.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about Image"/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small></small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10</small>
            </article>
          </div>
          <p>Hello, nice to meet you! My name is Eros Mehmeti, and I'm actively seeking a job as a software engineer. As a student at UBT, I've gained a strong foundation in computer science, programming languages, and software development methodologies.As a software engineer, I'm confident in my ability to design and implement scalable, efficient, and maintainable code. I'm also a quick learner, adaptable to new technologies, and comfortable working in a team environment.

I believe that my passion, skills, and dedication make me a strong candidate for any software engineering position. I look forward to discussing how I can contribute to your organization and contribute to the development of innovative software solutions.</p>
          <a href="#contact"className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default about