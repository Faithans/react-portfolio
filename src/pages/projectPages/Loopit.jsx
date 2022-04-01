import React from 'react';
import './loopit.css';

const Loopit = () => {
  return (
    <div className="container">
      <h1 className='company'>Loopit Lifestyle Inc. - Frontend Developer</h1>
      <h5 className='techStack'>Node.js, React,  Express, JavaScript, MySQL, Passport JS, AdobeXD</h5>
      <div className='bullet'>
        <ul className='loopit__list'>
          <li>Bootstrapped a tech startup, performed Lean startup strategy, and built MVP in agile methodology
          </li>
          <li>
          Selected by Create-X as 2021 batch( top 8% within over 1000 startups )
          </li>
          <li>
          Executed early-stage marketing strategy to generate 194% of average weekly growth rate over 3 months,  discovered the first 350 early adopters, and featured by Indie Hacker
          </li>
          <li>
          Designed and created a dynamic SPA using React and enhanced its user experience in both visual and functional specifications by developing responsive UI components through React, React Router, CSS3, and also JavaScript
          </li>
          <li>
          Managed version control throughout the development of the project by using Git
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Loopit;