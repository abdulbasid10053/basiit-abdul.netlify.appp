import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="https://Instagram.com/basiit_abdul" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
    
          <Link to="/contact">Contact me</Link>
          <a href="https://basiit-abdul.netlify.app" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div>
        <div>
          <a href="https://github.com/abdulbasid10053" title="Open-source on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
        <small>
          Made by <strong>Basiit abdul</strong> / <strong></strong>Design by Tania Rascia</strong>{''}
          <a href="https://github.com/taniarascia/taniarascia.com" target="_blank">
            View source
          </a>
        </small>
      </footer>
    )
  }
}
