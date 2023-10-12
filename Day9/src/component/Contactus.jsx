import React from 'react'
import "./contactus.css"
export default function Contactus() {
  return (
    <>
      <>
      

  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div id='container' className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt" />
          <div className="topic">Address</div>
          <div className="text-one">Sri Krishna College Of technology </div>
          <div className="text-two">Coimbatore-641042</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt" />
          <div className="topic">Phone</div>
          <div className="text-one">+917904651692</div>
          <div className="text-two">+919389562786</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope" />
          <div className="topic">Email</div>
          <div className="text-one">raghulpugal99@gmail.com</div>
          <div className="text-two">info.smartcampus@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>
          If you have any types of quries you can send me message from here. It's my pleasure to help
          you.
        </p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your message" />
          </div>
          <div className="input-box message-box"></div>
          <div className="button">
            <input type="button" defaultValue="Send Now" />
          </div>
        </form>
      </div>
    </div>
  </div>
</>


    </>
    
  )
}