import React from 'react'
import '../style/style.css'
const Trending = () => {
  return (
    <>
    <section class="section">
  <div class="container">
    <div class="sectionHeader">
      <div class="sectionHeaderLeft">
        <div class="accentLine"></div>
        <h2 class="sectionTitle">Trending Now</h2>
        <p class="sectionSubtitle">What the world is watching right now</p>
      </div>
      <div class="flex gap2">
        <button class="genrePill genrePillActive">All</button>
        <button class="genrePill">Movies</button>
        <button class="genrePill">TV Shows</button>
        <a href="search.html" class="btnGhost">View All <i class="fa fa-arrow-right"></i></a>
      </div>
    </div>
    <div class="scrollRow scrollRowWide" id="trendingScroll">
      {/* <!-- Cards generated via JS --> */}
    </div>
  </div>
</section>
    </>
  )
}

export default Trending