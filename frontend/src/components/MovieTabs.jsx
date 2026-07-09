import React from 'react'
import "../style/style.css"


import "../style/moviedetails.css"
const MovieTabs = () => {
  return (
    <div class="tabs">
    <button class="tab tabActive">Overview</button>
    <button class="tab" >Cast & Crew</button>
    <button class="tab" >Reviews</button>
    <button class="tab" >Media</button>
    <button class="tab" >Similar</button>
  </div>
  )
}

export default MovieTabs