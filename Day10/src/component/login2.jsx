import React from 'react'
import "./login2.css"
export default function Login2() {
    return (
        <>
        {/* Created By CodingNepal - www.codingnepalweb.com */}
        <meta charSet="UTF-8" />
        <title>Limit Input Characters | CodingNepal</title>
        <link rel="stylesheet" href="style.css" />
        {/* Iconsout Link for Icons */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/solid.css"
        />
        <div className="wrapper">
          <form action="#">
            <input
              type="text"
              spellCheck="false"
              placeholder="username"
              maxLength={19}
              required=""
            />
            <i className="uis uis-at" />
            <span className="counter">19</span>
          </form>
        </div>
      </>





    )
}