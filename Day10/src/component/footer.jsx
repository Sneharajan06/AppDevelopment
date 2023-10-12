import React from 'react'
import "./footer.css"
export default function Footer() {
    return (

        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Untitled</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
            />
            <link rel="stylesheet" href="assets/css/style.css" />
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="#">
                            <i className="icon ion-social-github" />
                        </a>
                        <a href="#">
                            <i className="icon ion-social-linkedin" />
                        </a>
                        <a href="#">
                            <i className="icon ion-social-twitter" />
                        </a>
                       
                    </div>
                    <ul className="list-inline">
                        
                        <li className="list-inline-item">
                            <a href="http://localhost:3000/aboutus">About</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://localhost:3000/FAQ">FAQ</a>
                        </li>
                        <li className="list-inline-item">
                            <a  href="http://localhost:3000/terms">Terms</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://localhost:3000/privacy">Privacy Policy</a>
                        </li>
                    </ul>
                    <p className="copyright">Smart Campus © 2023</p>
                </footer>
            </div>
        </>



    )
}
