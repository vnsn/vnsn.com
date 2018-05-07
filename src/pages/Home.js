import React from 'react';

import bestDesktopHome from "../desktop-list-sm.png";
import movieDesktop from "../desktop-movie-sm.png";

function Home(props) {
  return (
    <section className="home">
      <h2>Hi, I'm Jen!</h2>
      <div className="home content" >

        <p>And I'm a computer nerd! I may not be very stylish (I'm not a designer), but I love programming and using technology to solve problems.</p>

        <p>I’m a full-MERN-stack web developer, using Node.js, JavaScript, AJAX/Axios, HTML5, CSS3, Express, MongoDB, Mongoose, React, and Redux + Thunk.</p>

<p>Click on the snapshots to see my most recent projects.</p>
      <p>
        <ul>
          <li> <img src={bestDesktopHome} alt="movie desktop" /> <a href="">Best or Worst Advice</a></li>
          <li> <img src={movieDesktop} alt="movie desktop" /> <a href="/src/pages/Projects.js">Movie Game</a></li>
        </ul>
      </p>

      </div>
    </section>
  );
}

export default Home;
