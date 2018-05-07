import React from 'react';

import bestDesktopHome from "../desktop-list-sm.png";


function Projects(props) {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div  className="projects content" >

    <h3><a href="https://best-worst-advice.herokuapp.com/">Best (Or Worst) Advice I Ever Got</a></h3>
    <h4>View on <a href="https://github.com/vnsn/d41-01-full-stack-project">Github</a>.</h4>
    <img src={bestDesktopHome} alt="homepage of the project" />

    <h4>Objective</h4>
    <p>Create a full-stack application where visitors can post the best (or worst) advice they’ve ever gotten and who gave it to them. Users can also read and comment on entries from other users. The administrator can edit and delete entries and comments. Mobile first design. Laid out with CSS Grid so that it's automatically responsive without media breaks. See <a href="https://github.com/vnsn/d41-01-full-stack-project/blob/master/README.md">detailed functionality and other views</a>.</p>
    
    <h4>Technologies Used</h4>
    <p>Front End: HTML, CSS, JavaScript, React, Redux + Thunk, Axios</p>
    <p>Back End: Express, MongoDB, Mongoose</p>
    <p>Hosted at Heroku with the database at MLab</p>
    

<h3><a href="https://movie-game.netlify.com/">Movie Game</a></h3>
<h4>View on <a href="https://github.com/vnsn/assignments/tree/master/projects/d30-01-api-project">Github</a>.</h4>
    <img src={bestDesktopHome} alt="homepage of the project" />

Objective
Game where users are shown a movie title and the names of 4 actors. They have to guess which actor was NOT in the movie.

Technologies Used
Front End: HTML, CSS, JavaScript, React, Redux + Thunk, Axios
API used: The Movie Database
Hosted at Netlify







      
      </div>
    </section>
  );
}

export default Projects;
