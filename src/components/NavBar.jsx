// import React from 'react' 
import profilePhoto from "../../public/scinchan.jpg"
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <img src={profilePhoto} />
          <p id="userName">User name</p>
        </div>
        <div className="navContainer2">
          <h1>TO DO List</h1>
        </div>
      </nav>
    </>
  )
}

export default NavBar
