import React from 'react'
import bg from "../Assets/errorpage.jpg"
import "../Styles/ErrorStyle.css"

import { Link } from "react-router-dom";
function Errorjs() {
  return (
    <>
    <div className="wrapper ">

      <div>
        <img src={bg} alt="404" />
      </div>

      <Link to="/" className="btn order_now">
                Return to Home
              </Link>
    </div>
    </>
  )
}

export default Errorjs