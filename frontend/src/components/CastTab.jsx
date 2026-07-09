import React from 'react'
import "../style/style.css"
import "../style/moviedetails.css"
const CastTab = () => {
  return (
   <>
     <div id="castTab" class="detailTabContent hidden">
    <h3 class="detailBlockTitle">Main Cast</h3>
    <div class="scrollRow detailCastRow" id="mainCast"></div>
    <h3 class="detailBlockTitle detailBlockTitleMt">Director & Crew</h3>
    <div class="scrollRow detailCastRow" id="crewRow"></div>
  </div>
   </>
  )
}

export default CastTab