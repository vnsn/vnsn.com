import React from 'react';

function Footer(props) {
    return (
        <footer>
            <ul>  Made with 
            <li>
                    <a href="https://www.adobe.com/corporate-responsibility/education/digital-academy.html">
                        <i className="fas fa-heart fa-2x"></i>
                    </a>
                </li>
                <p>Find me on </p>
                <li>
                    <a href="http://www.github.com/vnsn/">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="http://www.linkedin.com/in/jvnsn">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="http://www.twitter.com/jvnsn/">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                </li>

                {/* <li>
                    <a href="http://www.motospectator.com/">
                        <i className="fas fa-motorcycle fa-2x"></i>
                    </a>
                </li> */}
            </ul>
        </footer>
    );
}

export default Footer;
