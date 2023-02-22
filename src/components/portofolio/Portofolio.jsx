import React from 'react'
import './Portofolio.css'
import IMG1 from '../../assets/exp.png'
import IMG2 from '../../assets/fit.png'
import IMG3 from '../../assets/chicken.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Expense Tracker- Wallet App',
    github:'https://github.com/Erosi1/Projekti/tree/master',
    demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id:2,
    image:IMG2,
    title:'Fitness App - Track your workouts',
    github:'https://github.com/Erosi1/FitnessApp',
    demo:'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
  id:3,
    image:IMG3,
    title:'Restaurant App Delivery System',
    github:'https://github.com/Erosi1/Restaurant',
    demo:'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},


]
const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className='container portofolio__container'>
        {
          data.map(({id,image,title,github,demo})=> {
            return (
              <article key={id}className='portofolio__item'>
          <div className="portofolio__item-image">
            <img src={image} alt={title} />
            </div>
         <h3>{title}</h3>
         <div className="portofolio__item-cta">
          <a href={github}className='btn'target="_blank">GitHub</a>
          <a href={demo}className='btn btn-primary'target="_blank">Live Demo</a>
         </div>
        </article>
            )
          })
        }
      
      </div>
    </section>
  )
}

export default Portofolio