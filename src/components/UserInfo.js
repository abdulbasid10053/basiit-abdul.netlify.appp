import React, { Component } from 'react'
import Ahmed from '../../content/images/profile.jpg'


export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={Ahmed} alt="Basiit Abdul" />
            </div>
            <div>
              <p>
                I'm Muhamaad Abdul Basid, developer and designer. My forever quote <i>Do it with passion or not at all</i>. <br></br>If you want to reach me, Drop me an email  🖥️
                <strong> abdulbasid10053@gmail.com </strong>
              </p>

           
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
