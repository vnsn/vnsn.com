import React from 'react';

import bestDesktopHome from "../desktop-list-sm.png";
import movieDesktop from "../desktop-movie-sm.png";

function Home(props) {
  return (
    <section className="home">
      <h2>Hi, I'm Jen!</h2>
      <div className="home content" >

        <p>And I'm a computer nerd! I may not be very "stylish" (I'm not a designer), but I love programming and using technology to solve problems.</p>

        <p>I’m a full-(MERN)-stack web developer, using Node.js, JavaScript, AJAX/Axios, HTML5, CSS3, Express, MongoDB, Mongoose, React, and Redux + Thunk.</p>

        <p>Most recent projects</p>
        <p>
          <div className="home-project-grid">
            <div>
              <h3>Best (Or Worst) Advice I Ever Got</h3>
              <p>View <a href="https://best-worst-advice.herokuapp.com/">Demo</a></p>
              <p>View on <a href="https://github.com/vnsn/d41-01-full-stack-project">Github</a>.</p>

              <h4>Home Page View</h4>
              <p><img src={bestDesktopHome} alt="best or worst advice desktop" title="See the Best or Worst Advice app" /> </p>

              <h4>Objective</h4>
              <p>Create a full-stack application where visitors can post the best (or worst) advice they’ve ever gotten and who gave it to them. Users can also read and comment on entries from other users. The administrator can edit and delete entries and comments. Mobile first design. Laid out with CSS Grid so that it's automatically responsive without media breaks. See <a href="https://github.com/vnsn/d41-01-full-stack-project/blob/master/README.md">detailed functionality and other views</a>.</p>

              <h4>Technologies Used</h4>
              <p>Front End: HTML, CSS, JavaScript, React, Redux + Thunk, Axios</p>
              <p>Back End: Express, MongoDB, Mongoose</p>
              <p>Hosted at Heroku with the database at MLab</p>

            </div>

            <div>
              <h3 id="movie">Movie Game</h3>
              <p id="movie">View <a href="https://movie-game.netlify.com/">Demo</a></p>
              <p>View on <a href="https://github.com/vnsn/assignments/tree/master/projects/d30-01-api-project">Github</a>.</p>

              <h4>Home Page View</h4>
              <p><img src={movieDesktop} alt="movie desktop" title="See the Movie Game app" /></p>

              <h4>Objective</h4>
              <p>Create a game using data pulled from The Movie Database API. Users are shown a movie title and the names of 4 actors. They have to guess which actor was NOT in the movie.</p>

              <h4>Technologies Used</h4>
              <p>Front End: HTML5, CSS3, JavaScript, React, Redux + Thunk, Axios</p>
              <p>API used: <a href="https://www.themoviedb.org/">The Movie Database</a></p>
              <p>Hosted at Netlify</p>
            </div>

          </div>
        </p>

      </div>
    </section>
  );
}

export default Home;
