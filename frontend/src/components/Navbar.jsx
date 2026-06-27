import React from 'react'
import '../style/style.css'
const Navbar = () => {
  return (
   <>
   <nav class="navbar" id="navbar">
  <div class="navInner">
    <a href="index.html" class="navLogo">
      <div class="navLogoIcon">🎬</div>
      CineVault
    </a>
    <ul class="navLinks">
      <li><a href="index.html" class="navLink navLinkActive">Home</a></li>
      <li><a href="recommendations.html" class="navLink">For You</a></li>
      <li><a href="search.html" class="navLink">Discover</a></li>
      <li><a href="watchlist.html" class="navLink">Watchlist</a></li>
      <li><a href="dashboard.html" class="navLink">Dashboard</a></li>
    </ul>
    <div class="navActions">
      <div class="navSearchWrapper">
        <i class="fa fa-search navSearchIcon"></i>
        <input type="text" placeholder="Search movies, actors..." class="navSearch" />
      </div>
      <a href="profile.html" class="navAvatar">T</a>
    </div>
    <button class="navHamburger" id="hamburger">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
   </>
  )
}

export default Navbar