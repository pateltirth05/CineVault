import React from 'react'
import "../public/style/Landingnavbar.css"
import "../../style/style.css"
import { useState } from 'react';
import { useEffect } from 'react';
const LandingTrailer = () => {
  return (
    <>
    <section class="section" style="padding-top:0">
  <div class="container">
    <div class="sectionHeader">
      <div class="sectionHeaderLeft">
        <div class="accentLine" style="background:linear-gradient(90deg,var(--crimson),var(--gold))"></div>
        <h2 class="sectionTitle">Latest Trailers</h2>
        <p class="sectionSubtitle">Recent releases and what's arriving in cinemas</p>
      </div>
    </div>
    <div class="scrollRow" id="trailersRow"></div>
  </div>
</section>
    </>
  )
}

export default LandingTrailer