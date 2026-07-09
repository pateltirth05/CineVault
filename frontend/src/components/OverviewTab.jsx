import React from 'react'
import "../style/style.css"
import "../style/moviedetails.css"
const OverviewTab = () => {
  return (
    <>
      <div id="overviewTab" class="detailTabContent">
    <div class="detailOverviewGrid">
      {/* <!-- Left --> */}
      <div>
        <div class="detailBlock">
          <h3 class="detailBlockTitle">Storyline</h3>
          <p class="detailBlockText">Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee. This sequel to 2021's Dune continues the adaptation of Frank Herbert's landmark 1965 novel.</p>
        </div>
        <div class="detailBlock">
          <h3 class="detailBlockTitle">Details</h3>
          <div class="detailDetailGrid">
            <div class="detailDetailItem"><span class="detailDetailLabel">Status</span><span class="badge badgeGreen">Released</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Release</span><span>March 1, 2024</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Runtime</span><span>2h 46m</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Budget</span><span>$190M</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Revenue</span><span>$714M</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Language</span><span>English</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Country</span><span>USA</span></div>
            <div class="detailDetailItem"><span class="detailDetailLabel">Rating</span><span>PG-13</span></div>
          </div>
        </div>
        <div class="detailBlock">
          <h3 class="detailBlockTitle">Genres</h3>
          <div class="detailGenrePills">
            <span class="genrePill genrePillActive">Sci-Fi</span>
            <span class="genrePill">Adventure</span>
            <span class="genrePill">Drama</span>
            <span class="genrePill">Action</span>
            <span class="genrePill">Epic</span>
          </div>
        </div>
      </div>
      {/* <!-- Right --> */}
      <div>
        <div class="detailBlock">
          <h3 class="detailBlockTitle">Ratings</h3>
          <div class="detailRatingsGrid">
            <div class="detailRatingCard detailRatingCv">
              <p class="detailRatingSource">CineVault</p>
              <p class="detailRatingScore">8.8</p>
              <p class="detailRatingCount">142K votes</p>
            </div>
            <div class="detailRatingCard">
              <p class="detailRatingSource">IMDb</p>
              <p class="detailRatingScore">8.8</p>
              <p class="detailRatingCount">800K votes</p>
            </div>
            <div class="detailRatingCard">
              <p class="detailRatingSource">Rotten Tomatoes</p>
              <p class="detailRatingScore">92%</p>
              <p class="detailRatingCount">Critics</p>
            </div>
            <div class="detailRatingCard">
              <p class="detailRatingSource">Metacritic</p>
              <p class="detailRatingScore">79</p>
              <p class="detailRatingCount">Metascore</p>
            </div>
          </div>
        </div>
        <div class="detailBlock">
          <h3 class="detailBlockTitle">Where to Watch</h3>
          <div class="detailStreamGrid">
            <div class="detailStreamItem"><div class="detailStreamLogo detailMax">MAX</div><span>Stream</span></div>
            <div class="detailStreamItem"><div class="detailStreamLogo detailPrime">PRIME</div><span>Rent / Buy</span></div>
            <div class="detailStreamItem"><div class="detailStreamLogo detailApple">🍎</div><span>Rent / Buy</span></div>
          </div>
        </div>
        <div class="detailBlock">
          <h3 class="detailBlockTitle">Keywords</h3>
          <div class="detailGenrePills">
            <span class="genrePill">Desert</span>
            <span class="genrePill">Prophecy</span>
            <span class="genrePill">Space Opera</span>
            <span class="genrePill">Based on Novel</span>
            <span class="genrePill">War</span>
            <span class="genrePill">Revenge</span>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default OverviewTab