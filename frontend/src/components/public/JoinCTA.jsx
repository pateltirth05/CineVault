import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { Link } from 'react-router-dom'
const JoinCTA = () => {
  return (
   <>
   <section class="section" style={{paddingTop:"0"}}>
  <div class="container">
    <div class="landingJoinCta">
      <div class="landingJoinCtaLeft">
        <p class="label" style={{marginBottom:"0.75rem"}}>Create a free account</p>
        <h2 class="displayFont landingJoinCtaTitle">Log what you've seen. Build your watchlist. Save your favorites.</h2>
        <p class="landingJoinCtaDesc">Browsing and searching are open to everyone. Sign up to track movies, rate what you've watched, and get a personal dashboard.</p>
        <div class="flex gap2 mt2">
          <Link to="/register" class="btnPrimary btnLg">Create Free Account</Link>
          <Link to="/login" class="btnSecondary">Log In</Link>
        </div>
      </div>
      <div class="landingJoinCtaRight">
        <div class="landingJoinCtaCard">
          <div class="landingJoinCtaFeature"><i class="fa fa-bookmark"></i> Build a watchlist</div>
          <div class="landingJoinCtaFeature"><i class="fa fa-heart"></i> Save favorites</div>
          <div class="landingJoinCtaFeature"><i class="fa fa-star"></i> Rate movies you've seen</div>
          <div class="landingJoinCtaFeature"><i class="fa fa-chart-bar"></i> View your personal dashboard</div>
          <div class="landingJoinCtaFeature"><i class="fa fa-thumbs-up"></i> Get tailored recommendations</div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default JoinCTA