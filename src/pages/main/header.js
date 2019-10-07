import React from 'react';

const Header = () => {
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">gitlist</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="https://github.com/srfnd/gitlist">view the source code</a></li>
         </ul>
        </div>
      </nav>
    )
};

export default Header;