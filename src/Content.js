import React from 'react';

import { Switch, Route, withRouter } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function Content(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </main>
    );
}

export default withRouter(Content);
