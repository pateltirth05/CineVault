import React from 'react'
import "../style/style.css"
const Hero = ({movie}) => {
  return (
    <>
     <section class="heroSection" style={{minHeight:'100vh'}}>
   
 <div class="heroBg">
    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Hero" />
  </div>
   <div class="heroOverlay"></div>
  <div class="container">
    <div class="heroContent">
      <div class="heroEyebrow">
        <span class="badge badgeCrimson"><i class="fa fa-fire"></i> Trending #1</span>
        <span class="badge badgeGold">2024</span>
        <span class="badge badgePurple">Sci-Fi</span>
      </div>
      <br></br>
      <h1 class="heroTitle displayFont">{movie.title}</h1>
      <div class="heroMeta">
        <span class="heroMetaItem"><i class="fa fa-star" style={{color:'var(--gold)'}}></i> {movie.vote_average}</span>
        <span class="heroMetaItem"><i class="fa fa-clock"></i> 2h 46m</span>
        <span class="heroMetaItem"><i class="fa fa-globe"></i> {movie.original_language}</span>
        <span class="heroMetaItem"><i class="fa fa-user"></i> Denis Villeneuve</span>
      </div>
      <p class="heroDesc">{movie.overview}</p>
      <span class="heroMetaItem">Release Date : {movie.release_date}</span><br/>
      <div class="heroActions">
        <a href="movie-detail.html" class="btnPrimary btnLg"><i class="fa fa-play"></i> Watch Now</a>
        <button class="btnSecondary btnLg"><i class="fa fa-bookmark"></i> Add to Watchlist</button>
        <button class="btnIcon"><i class="fa fa-heart"></i></button>
        <button class="btnIcon"><i class="fa fa-share-alt"></i></button>
      </div>
    </div>
  </div>
  <div class="heroScrollDots">
    <div class="heroDot heroDotActive"></div>
    <div class="heroDot"></div>
    <div class="heroDot"></div>
  </div>
  
   
 
 
</section>
    </>
  )
}

export default Hero