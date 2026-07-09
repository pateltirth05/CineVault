import React from 'react'
import "../../style/Locked.css"
import { Link } from 'react-router-dom'
const LockedMovieContent = () => {
  return (
    <>
    <div className="lockOverlay">
    <i className="fa-solid fa-lock"></i>

    <h2>Unlock the Full CineVault Experience</h2>

    <p>
        Sign in to view cast, reviews,
        trailers, similar movies and AI recommendations.
    </p>

    <Link to="/login" className="btnPrimary">
        Login
    </Link>

    <Link to="/register" className="btnSecondary">
        Create Account
    </Link>
</div>
    </>
  )
}

export default LockedMovieContent