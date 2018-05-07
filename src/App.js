import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Content from "./Content";

function App() {
    return (
        <div className="wrapper" >
            <Header />
            <Nav />
            <Content />
            <Footer />
        </div>
    )
}

export default App;
