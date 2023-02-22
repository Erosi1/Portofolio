import React from 'react'
import CV from '../../assets/CV_Eros_Mehmeti.pdf'

const CTA = () => {
  return (
    <div classname="cta">
        <a href={CV} download className="btn">Download CV</a>&nbsp;&nbsp;&nbsp;
        <a href="#contact"className="btn btn-primary">Lets Talk</a>
    </div>
  )
}

export default CTA