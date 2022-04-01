import React from 'react';
import './backcountry.css';

const Backcountry = () => {
  return (
    <div className="container">
      <h1 className='company'>Backcountry - Fullstack Engineer</h1>
      <h5 className='techStack'>Node.js, React,  Express, JavaScript, TypeScript, Jest, Github Actions, PostgreSQL, K6, AWS EC2, Docker, Jest</h5>
      <div className='bullet'>
        <ul className='backcounrty__list'>
          <li>Designed UI and UX for multiple product components, providing a consistent user experience across products

          </li>
          <li>
            Integrated API, created react context, and executed code review to maintain the cleanliness of the codebase

          </li>
          <li>
            Implemented a fully functional carousel slideshow, magnifier cursor zoom, drop-down menu, and CSS animation

          </li>
          <li>
            Extensively used Git for version control and collaboration with colleague developers in project development
          </li>
          <li>
            Achieved 90% code coverage with Jest and React Testing Library
          </li>
          <li>
            Enforced team code quality by automating testing, code reviews, build, and deployment using Github Actions; faster code feedback, resulting in improved velocity

          </li>
          <li>
            Achieved lighthouse scores in the 90s by optimizing production bundle

          </li>
          <li>
            Used Asana for bug tracking, issue tracking, and task/story management

          </li>
          <li>
            Helped product managers and designers flesh out product requirements before implementation

          </li>
          <li>
            Developed server-side RESTful API with Node js and Express

          </li>

          <li>
            Designed database schema for PostgreSQL

          </li>

          <li>
            Generated and seeded PostgreSQL with 10 million records and optimized queries to take less than 2 ms

          </li>

          <li>
            Load-tested with K6 and horizontal scaled backend microservice to achieve > 1000 rps on AWS EC2 micro

          </li>
          <li>
            Deployed application using a microservice architecture with dockerized module

          </li>

          <li>
            Actively involved in Agile software development methodologies by participating in daily stand-ups and seasonal sprints

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Backcountry;