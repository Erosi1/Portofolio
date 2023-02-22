import React from 'react'
import './Portofolio.css'
import IMG1 from '../../assets/exp.png'
import IMG2 from '../../assets/fit.png'
import IMG3 from '../../assets/chicken.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import res from '../../assets/restauranti.mp4'
import fit from '../../assets/fitness_Trim.mp4'
import exp from '../../assets/expensetracker.mp4'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Expense Tracker- Wallet App',
    github:'https://github.com/Erosi1/Projekti/tree/master',
    demo:exp
  },
  {
    id:2,
    image:IMG2,
    title:'Fitness App - Track your workouts',
    github:'https://github.com/Erosi1/FitnessApp',
    demo:fit
},
{
  id:3,
    image:IMG3,
    title:'Restaurant App Delivery System',
    github:'https://github.com/Erosi1/Restaurant',
    demo:res
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