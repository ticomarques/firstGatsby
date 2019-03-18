import React from 'react'

const Footer = () => {
    return (
      <footer>
        <div className="row">
          
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          
        </div>
      </footer>
    )
};

export default Footer;
