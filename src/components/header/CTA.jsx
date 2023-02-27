import React from 'react';
import CV from '../../assets/CV-HadrienPoulenc.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
      <h4> Contact </h4>     </a>
    </div>
  );
};

export default CTA;
