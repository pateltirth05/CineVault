import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
const LandingTopRated = () => {
  return (
    <>
    <section class="landingDarkStrip">
  <div class="container">
    <div class="sectionHeader">
      <div class="sectionHeaderLeft">
        <div class="accentLine" style="background:linear-gradient(90deg,var(--gold),#9B59B6)"></div>
        <h2 class="sectionTitle">Top Rated of All Time</h2>
        <p class="sectionSubtitle">Highest rated titles from the TMDB catalog</p>
      </div>
      <a href="search.html?section=toprated" class="btnGhost">Full List <i class="fa fa-arrow-right"></i></a>
    </div>
    <div class="landingTopRatedGrid" id="topRatedGrid"></div>
  </div>
</section>
    </>
  )
}

export default LandingTopRated