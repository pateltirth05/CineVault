import React from 'react'
import "../style/style.css"
const Footer = () => {
  return (
  <>
  <footer class="footer">
  <div class="container">
    <div class="footerGrid">
      <div class="footerBrand">
        <div class="navLogo"><div class="navLogoIcon">🎬</div> CineVault</div>
        <p>Your AI-powered cinema companion. Discover, track, and fall in love with movies curated just for you.</p>
        <div class="footerSocials mt2">
          <a href="#" class="footerSocial"><i class="fab fa-twitter"></i></a>
          <a href="#" class="footerSocial"><i class="fab fa-instagram"></i></a>
          <a href="#" class="footerSocial"><i class="fab fa-discord"></i></a>
          <a href="#" class="footerSocial"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <div>
        <p class="footerColTitle">Discover</p>
        <ul class="footerLinks">
          <li><a href="#" class="footerLink">Trending</a></li>
          <li><a href="#" class="footerLink">New Releases</a></li>
          <li><a href="#" class="footerLink">Top Rated</a></li>
          <li><a href="#" class="footerLink">Coming Soon</a></li>
          <li><a href="search.html" class="footerLink">Search</a></li>
        </ul>
      </div>
      <div>
        <p class="footerColTitle">My Account</p>
        <ul class="footerLinks">
          <li><a href="profile.html" class="footerLink">Profile</a></li>
          <li><a href="watchlist.html" class="footerLink">Watchlist</a></li>
          <li><a href="favorites.html" class="footerLink">Favorites</a></li>
          <li><a href="watched.html" class="footerLink">Watched</a></li>
          <li><a href="dashboard.html" class="footerLink">Dashboard</a></li>
        </ul>
      </div>
      <div>
        <p class="footerColTitle">Company</p>
        <ul class="footerLinks">
          <li><a href="#" class="footerLink">About</a></li>
          <li><a href="#" class="footerLink">Blog</a></li>
          <li><a href="#" class="footerLink">API Docs</a></li>
          <li><a href="#" class="footerLink">Privacy</a></li>
          <li><a href="#" class="footerLink">Terms</a></li>
        </ul>
      </div>
    </div>
    <div class="footerBottom">
      <p>&copy; 2024 CineVault AI. Built with ❤️ and MERN stack.</p>
      <p>Powered by TMDB API · AI by OpenAI</p>
    </div>
  </div>
</footer>
  </>
  )
}

export default Footer