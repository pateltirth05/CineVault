import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { Link } from 'react-router-dom'
const LandingFooter = () => {
  return (
   <>
   <footer class="footer">
  <div class="container">
    <div class="footerGrid">
      <div class="footerBrand">
        <div class="navLogo"><div class="navLogoIcon">🎬</div> CineVault</div>
        <p>Your personal movie companion — discover, track, and rate films from a catalog of thousands.</p>
        <div class="footerSocials mt2">
          <Link to="/" class="footerSocial"><i class="fab fa-twitter"></i></Link>
          <Link to="/" class="footerSocial"><i class="fab fa-instagram"></i></Link>
          <Link to="/" class="footerSocial"><i class="fab fa-discord"></i></Link>
          <Link to="/" class="footerSocial"><i class="fab fa-github"></i></Link>
        </div>
      </div>
      <div>
        <p class="footerColTitle">Discover</p>
        <ul class="footerLinks">
          <li><Link to="/search.html?section=trending"  class="footerLink">Trending</Link></li>
          <li><Link to="/search.html?section=popular"   class="footerLink">Popular</Link></li>
          <li><Link to="/search.html?section=toprated"  class="footerLink">Top Rated</Link></li>
          <li><Link to="/search.html?section=upcoming"  class="footerLink">Upcoming</Link></li>
        </ul>
      </div>
      <div>
        <p class="footerColTitle">Account</p>
        <ul class="footerLinks">
          <li><Link to="/login"  class="footerLink">Log In</Link></li>
          <li><Link to="/register" class="footerLink">Sign Up</Link></li>
        </ul>
      </div>
      <div>
        <p class="footerColTitle">Info</p>
        <ul class="footerLinks">
          <li><Link to="/" class="footerLink">About</Link></li>
          <li><Link to="/" class="footerLink">Privacy</Link></li>
          <li><Link to="/" class="footerLink">Terms</Link></li>
        </ul>
      </div>
    </div>
    <div class="footerBottom">
      <p>&copy; 2026 CineVault. Built with the MERN stack.</p>
      <p>Movie data powered by <Link to="/https://www.themoviedb.org" target="_blank" class="goldText">TMDB</Link></p>
    </div>
  </div>
</footer>
   </>
  )
}

export default LandingFooter