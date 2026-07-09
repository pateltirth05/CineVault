import React from 'react'
import "../style/style.css"
import "../style/moviedetails.css"
const MediaTab = () => {
  return (
    <>
    <div id="mediaTab" class="detailTabContent hidden">
    <h3 class="detailBlockTitle">Trailers & Videos</h3>
    <div class="detailMediaGrid" id="mediaGrid"></div>
    <h3 class="detailBlockTitle detailBlockTitleMt">Stills</h3>
    <div class="detailStillsGrid" id="stillsGrid"></div>
  </div>

    </>
  )
}

export default MediaTab