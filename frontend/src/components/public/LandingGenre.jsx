import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
const LandingGenre = () => {
  return (
    <section class="section" style={{paddingTop:'0'}}>
  <div class="container">
    <div class="sectionHeader">
      <div class="sectionHeaderLeft">
        <div class="accentLine"></div>
        <h2 class="sectionTitle">Browse by Genre</h2>
      </div>
    </div>
    <div class="landingGenreStrip">
      <a href="search.html?genre=28"   class="landingGenreChip landingGenreChipRed"><i class="fa fa-bolt"></i> Action</a>
      <a href="search.html?genre=878"  class="landingGenreChip landingGenreChipBlue"><i class="fa fa-rocket"></i> Sci-Fi</a>
      <a href="search.html?genre=27"   class="landingGenreChip landingGenreChipDark"><i class="fa fa-skull"></i> Horror</a>
      <a href="search.html?genre=18"   class="landingGenreChip landingGenreChipGold"><i class="fa fa-masks-theater"></i> Drama</a>
      <a href="search.html?genre=35"   class="landingGenreChip landingGenreChipGreen"><i class="fa fa-face-laugh"></i> Comedy</a>
      <a href="search.html?genre=53"   class="landingGenreChip landingGenreChipPurple"><i class="fa fa-eye"></i> Thriller</a>
      <a href="search.html?genre=10749" class="landingGenreChip landingGenreChipPink"><i class="fa fa-heart"></i> Romance</a>
      <a href="search.html?genre=12"   class="landingGenreChip landingGenreChipOrange"><i class="fa fa-map"></i> Adventure</a>
      <a href="search.html?genre=99"   class="landingGenreChip landingGenreChipTeal"><i class="fa fa-film"></i> Documentary</a>
      <a href="search.html?genre=14"   class="landingGenreChip landingGenreChipIndigo"><i class="fa fa-wand-sparkles"></i> Fantasy</a>
    </div>
  </div>
</section>
  )
}

export default LandingGenre