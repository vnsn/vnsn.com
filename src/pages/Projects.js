import React from 'react';

import bestDesktopHome from "../desktop-list-sm.png";
import movieDesktop from "../desktop-movie-sm.png";

function Projects(props) {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects content" >

        <h3>Best (Or Worst) Advice I Ever Got</h3>
        <p>View <a href="https://best-worst-advice.herokuapp.com/">Demo</a>.</p>
        <p>View on <a href="https://github.com/vnsn/d41-01-full-stack-project">Github</a>.</p>

        <h4>Objective</h4>
        <p>Create a full-stack application where visitors can post the best (or worst) advice they’ve ever gotten and who gave it to them. Users can also read and comment on entries from other users. The administrator can edit and delete entries and comments.</p>

        <h4>Technologies Used</h4>
        <p>Front End: HTML, CSS, JavaScript, React, Redux + Thunk, Axios</p>
        <p>Back End: Express, MongoDB, Mongoose</p>
        <p>Hosted at Heroku with the database at MLab</p>

        <h4>Functionality</h4>
        <ul>
          <li>Mobile first design. Laid out with CSS Grid so that it's automatically responsive without media breaks. There's one media break at 620px to increase the font size on "html" and increase the whitespace around the About and Add Advice content sections. Each section sets the font size to 1 rem so font sizes scale automatically and expectedly.</li>

          <li>Site users can add the best or worst advice they've ever gotten on a form and submit it.
           <ul>
              <li>There are seven fields available, but only three are required (best/worst, the advice, and who gave the advice). All seven fields are:
                <ul>
                  <li>Best or Worst (required)</li>
                  <li>Category (optional, defaults to "Life")</li>
                  <li>Advice (required)</li>
                  <li>From - who gave the advice (required)</li>
                  <li>Your name - site user who is sharing the advice (optional)</li>
                  <li>Website URL (optional)</li>
                  <li>Image Link (optional)</li>
                </ul>
              </li>

              <li>If the user fills out the optional "your name" field, the advice block will show "Shared by: &lt;name&gt;".</li>

              <li>If the user also fills out the optional "website" field, the advice block will show "Shared by: <a href="http://www.github.com/vnsn/">&lt;name&gt;</a>" and the name will be a link to the website.</li>
              <li>If only a website is shared, without a name, the advice block will show "Shared by: [Anonymous](http://www.github.com)" and Anonymous will be a link to the website.</li>
            </ul>
          </li>

          <li>Users can comment on advice entries.</li>
          <li>Administrator can delete advice, delete comments, and edit comments. Can also re-order the advice with the "upvote / downvote" module.</li>
          <li>The opacity of the background image of the page is conditionally rendered based on which "Router" link is loaded. The homepage has a lighter background image, while the About and Add pages display the image normally.</li>
          <li>The background color of the advice block renders conditionally based on whether the advice is the "best" (red background) or the "worst" (gray background).</li>

          <li>The date the advice was added to the website becomes a "permalink" to display that advice on its own page, for bookmarking or sharing. (Using a Router URL parameter and doing a "get one" from the database.)
          <ul>
              <li>The individual advice page shows the photo at the URL that was optionally entered by the user. If no URL was entered, that html element isn't rendered on the page.</li>
            </ul>
          </li>

          <li>Displaying the list of advice blocks on the home page uses a two level sort - first by most votes and then in reverse date order (newest first). (At this time, only the administrator can see how many "votes" each entry has since only the administrator can change that.)</li>
        </ul>

        <h4>Challenges / Lessons Learned</h4>
        <ul>
          <li>There is one Form component that handles both adding and editing versus having one component for each, as I had been taught.</li>
          <li>I wanted to keep all the data I'd loaded into my local Mongo database, so I spent some time learning how to export and import JSON files into Mongo.</li>
        </ul>

        <h4>Ideas for Improvements</h4>
        <ul>
          <li>User authentication so users can edit / delete their own entries and edit / delete their comments. Would also allow users to upvote and downvote other entries, and save favorites.</li>
          <li>Allow users to search, sort, and filter the displayed advice by author, date, category.</li>
          <li>Allow users to "flag as inappropriate" - advice and comments.</li>
          <li>Allow users to add new categories of advice, or at least suggest new categories.</li>
          <li>Include the photo on the home page (list of advice) rather than just on the individual advice page.</li>
        </ul>

        <p>View the <a href="https://github.com/vnsn/d41-01-full-stack-project/blob/master/README.md">README</a> on Github for more screenshots.</p>
        <img src={bestDesktopHome} alt="homepage of the project" />


        <h3 id="movie">Movie Game</h3>
        <p id="movie">View <a href="https://movie-game.netlify.com/">Demo</a>.</p>
        <p>View on <a href="https://github.com/vnsn/assignments/tree/master/projects/d30-01-api-project">Github</a>.</p>

        <h4>Objective</h4>
        <p>Create a game using data pulled from The Movie Database API. Users are shown a movie title and the names of 4 actors. They have to guess which actor was NOT in the movie.</p>

        <h4>Technologies Used</h4>
        <p>Front End: HTML5, CSS3, JavaScript, React, Redux + Thunk, Axios</p>
        <p>API used: <a href="https://www.themoviedb.org/">The Movie Database</a></p>
        <p>Hosted at Netlify</p>

        <h4>Functionality</h4>
        <p>Mobile first design. Laid out with CSS Grid so that I could practice easily moving sections around the page at different media breaks. Small layout in effect up to 600px wide, medium layout from 600 - 899px, and large layout from 900px.</p>
        <p>The user-facing functionality is pretty straightforward, so here's what is happening behind the scenes:</p>
        <ul>
          <li>When the app loads, it grabs - from The Movie Database API - a list of the 20 most popular movies out of the combined pool of movies in the action, comedy, and family genres and saves them in an array in the "Redux store".</li>
          <li>It grabs the 120 most popular non-adult actors from the API and saves them in the Redux store as a "pool of potential answers".</li>
          <li>Questions are built on the fly, when the user clicks "start" or "next question".
          <ul>
              <li>A random movie is chosen from the app's Redux store.</li>
              <li>An axios "get" request is made to the API to get the cast list for that movie.</li>
              <li>Three cast members are chosen and saved to an "answers" array. </li>
              <li>One actor is chosen from the "pool of potential answers" and verified to NOT be in that movie. That name is then added to the "answers" array as the final answer choice for that question.</li>
              <li>The "answers" array is then shuffled so the correct answer (the one added to the array last) is not always in the same spot on the screen.</li>
              <li>The game component maps through the answer array to display the choices on the screen.</li>
              <li>When the user clicks an answer, the app turns the correct answer green. The "questions" counter in the Points section is incremented. And if the user got the answer right, the "correct" counter in the Points section is incremented.</li>
            </ul>
          </li>
        </ul>

        <h4>Challenges / Lessons Learned</h4>
        <ul>
          <li>If you're going to build a trivia game, use a question API or build one. Don't just pull facts from an API and build questions on the fly when the user clicks on "next question".</li>
          <li>This was our first project using React / Redux / Thunk, so lots of practice with those, and with lifecycle methods.</li>
          <li>Learned how to do a second axios.get based on information obtained from the first request.</li>
          <li>How to work around limitations / design of the API.</li>
          <li>I wish I had planned out how to structure methods in my components such that I could do my simple MVP / proof of concept and then re-use them with minimal effort for the more complicated thing.</li>
          <li>Lots of practice getting random elements from an array.</li>
        </ul>

        <h4>Ideas for Improvements</h4>
        <ul>
          <li>Add user authentication, so players could save their score / progress and the site can display &quot;high scores&quot;.</li>
          <li>Add the ability to have &quot;player 1&quot; and &quot;player 2&quot; so friends could play against each other.</li>
          <li>Make it more obvious that after an answer is clicked, the one that turns green is the right answer.</li>
          <li>Make the answer choice buttons all the same size at every screen width.</li>
          <li>Hide the &quot;next question&quot; button until the user has answered the question.</li>
          <li>Display only the release year, not the entire date.</li>
          <li>Increase the size of the pool of movies from which to quiz.</li>
          <li>Get help from an artistic classmate so it doesn&#39;t look like it was designed by a 5-year-old wearing a blindfold.</li>
        </ul>

        <p>View the <a href="https://github.com/vnsn/assignments/blob/master/projects/d30-01-api-project/README.md">README</a> on Github for more screenshots.</p>

        <img src={movieDesktop} alt="homepage of the project" />
      </div>
    </section >
  );
}

export default Projects;
