import React from 'react'
import "./AboutUs"
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    
    
    <>
      <ul className="image-list">
                        
</ul>
    <div className="imggg"></div><div>
    
    <h2 >About Smart Campus and Surveillance System</h2>
    <p style={{ textAlign: "center"}}>
        The Smart Campus and Surveillance System is a cutting-edge solution
        designed to enhance security and efficiency on campus. Our system
        integrates advanced technology to provide a safe and intelligent
        environment for educational institutions and organizations.
    </p>
     <h2 style={{ textAlign: "center"}}>Our Mission</h2>
    <p style={{ textAlign: "center"}}>
        Our mission is to create a secure and efficient campus environment by
        leveraging state-of-the-art surveillance and automation technologies. We
        aim to promote safety, streamline operations, and empower educational
        institutions to focus on learning and growth.
    </p>

    <h2 style={{ textAlign: "center"}}>Key Features</h2>
    
    <ul>
       
        <li style={{ textAlign: "center"}}>Parking Management</li>
        <br />

        <li style={{ textAlign: "center"}}>Visitor Management</li>
        <br />
        <li style={{ textAlign: "center"}}>Event Management</li>
        <br />
        
    </ul>
   

    <h2 style={{ textAlign: "center"}}>Our Team</h2>
    <p style={{ textAlign: "center"}}>
        We are a dedicated team of professionals with expertise in
        surveillance, security, and software development. Our passion for
        creating safer and smarter environments drives us to innovate and
        deliver top-notch solutions.
    </p>

    <h2 style={{ textAlign: "center"}}>Contact Us</h2>
    <p style={{ textAlign: "center"}}>
        If you have any questions or would like to learn more about our Smart
        Campus and Surveillance System, please feel free to reach out to us:
        <br/>
    <button><Link to='/contactus'>Contact Us</Link> </button>
    </p>
    
</div>
</>

  )
}