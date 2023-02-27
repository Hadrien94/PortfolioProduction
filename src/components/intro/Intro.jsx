import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (

    <section id="about">
      <div class="bandeau"></div>
      <h2> Portfolio professionnel</h2>
      <h5> Passionné de user experience, de marketing, et luxe. <br></br>Ce portfolio est la vitrine de mon expérience professsionelle au cours de mes 5 ans d'expériences en agence. 
      <hr></hr><br></br><br></br>DISCLAIMER <hr></hr><br></br>Site utilisé à des fins de présentations non commerciales, droits réservés aux agences citées</h5>
      <p></p>
      
      <div className="spacing"></div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>5 ans</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>web / UX & UI / Design</small>
            </article>
          </div>
          <div className='spacing'></div>
          <a href="#contact" className="btn btn-primary">Prenons un café</a>
        </div>
      </div>
    </section>

  )
}

export default Intro