import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { Link } from 'react-router-dom'
const Landingnavbar = () => {
  return (
    <>
    <nav class="navbar" id="navbar">
  <div class="navInner">
    <Link to="/landing" class="navLogo">
      <div class="navLogoIcon">🎬</div>
      CineVault
    </Link>
    <ul class="navLinks">
      <li><Link to="/landing" class="navLink navLinkActive">Home</Link></li>
      <li><Link to="/search.html" class="navLink">Movies</Link></li>
      <li><Link to="/search.html?section=toprated" class="navLink">Top Rated</Link></li>
      <li><Link to="/search.html?section=upcoming" class="navLink">Upcoming</Link></li>
    </ul>
    <div class="navActions">
      <Link to="/login" class="btnGhost">Log In</Link>
      <Link to="/register" class="btnPrimary">Sign Up</Link>
    </div>
    <button class="navHamburger" id="hamburger">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
    </>
  )
}

export default Landingnavbar