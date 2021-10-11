import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
// import 'bootstrap/dist/css/bootstrap.css';

function SideBar() {
    return (
        <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-10 col-12 mx-auto">
        <div className="row">
          <div
            className="col-md-6 col-12 hero-text order-md-0 order-1 d-flex justify-content-center align-item-start flex-column ">
            <h1>Better Digital Experiance</h1>
            <h1>With NineStars</h1>
            <p>we are team of  <span className="bold-style">talent designers</span> making website with Bootstrap</p>
            <button className="btn-style btn-primary">Get Started</button>
          </div>

          {/* {{!-- right side --}} */}
          <div className="col-md-6 col-12 hero-text order-md-0 order-1">
            <figure>
              <img src="https://image.freepik.com/free-vector/standup-meeting-concept-illustration_114360-7056.jpg" alt=""/>
              {/* {{!-- <img src="user1.png" /> --}} */}
            </figure>
          </div>
        </div>

      </div>
    </div>
  </div>
    )
}

export default SideBar
