import React from "react";
import "../style/style.css";
import "../style/moviedetails.css";

const MovieHero = ({ movie }) => {
  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="detailHero">
      <div className="detailHeroBg">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>

      <div className="detailHeroOverlay"></div>

      <div className="container detailHeroContent">
        <div className="detailHeroInner">
          {/* Poster */}
          <div className="detailPosterWrap">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="detailPoster"
            />

            <div className="detailPosterActions">
              <button className="btnPrimary btnFull detailWatchBtn">
                <i className="fa fa-play"></i> Watch Trailer
              </button>

           <button className="btnSecondary btnFull lockedBtn">

    <span className="lockedContents">
        <i className="fa fa-bookmark"></i>
        Watchlist
    </span>

    <span className="lockBadge">
        <i className="fa-solid fa-lock"></i>
        Locked
    </span>

</button>

             <button className="btnGhost btnFull lockedBtn">

    <span className="lockedContent">
        <i className="fa fa-heart"></i>
        Watchlist
    </span>

    <span className="lockBadge">
        <i className="fa-solid fa-lock"></i>
        Locked
    </span>

</button>
            </div>

            <div className="detailPosterScore">
              <span className="detailScoreLabel">TMDB</span>
              <span className="detailScoreValue">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="detailInfo">
            <div className="detailEyebrow">
              <span className="badge badgeCrimson">
                <i className="fa fa-fire"></i> Popular
              </span>

              <span className="badge badgeGold">
                {movie.release_date?.split("-")[0]}
              </span>

              <span className="badge badgePurple">
                {movie.genres?.map((genre) => genre.name).join(" • ")}
              </span>
            </div>

            <h1 className="detailTitle displayFont">
              {movie.title}
            </h1>

            <div className="detailMeta">
              <span className="detailMetaItem detailRating">
                <i className="fa fa-star"></i>{" "}
                {movie.vote_average.toFixed(1)}
              </span>

              <span className="detailMetaItem">
                {movie.runtime} min
              </span>

              <span className="detailMetaItem">
                {movie.status}
              </span>

              <span className="detailMetaItem">
                {movie.original_language.toUpperCase()}
              </span>

              <span className="detailMetaItem">
                {movie.release_date}
              </span>
            </div>

            <p className="detailDesc">
              {movie.overview}
            </p>

            <div className="detailCredits">
              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Original Title
                </span>

                <span className="detailCreditValue">
                  {movie.original_title}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Budget
                </span>

                <span className="detailCreditValue">
                  $
                  {movie.budget
                    ? movie.budget.toLocaleString()
                    : "Unknown"}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Revenue
                </span>

                <span className="detailCreditValue">
                  $
                  {movie.revenue
                    ? movie.revenue.toLocaleString()
                    : "Unknown"}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Production
                </span>

                <span className="detailCreditValue">
                  {movie.production_companies
                    ?.map((company) => company.name)
                    .join(" • ")}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Production Country
                </span>

                <span className="detailCreditValue">
                  {movie.production_countries
                    ?.map((country) => country.name)
                    .join(", ")}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Spoken Languages
                </span>

                <span className="detailCreditValue">
                  {movie.spoken_languages
                    ?.map((lang) => lang.english_name)
                    .join(", ")}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Popularity
                </span>

                <span className="detailCreditValue">
                  {movie.popularity.toFixed(1)}
                </span>
              </div>

              <div className="detailCredit">
                <span className="detailCreditLabel">
                  Vote Count
                </span>

                <span className="detailCreditValue">
                  {movie.vote_count.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="detailActionRow">
              <button
                className="btnIcon detailSocialBtn"
                title="Share"
              >
                <i className="fa fa-share-alt"></i>
              </button>

              <button
                className="btnIcon detailSocialBtn"
                title="Add to List"
              >
                <i className="fa fa-list"></i>
              </button>

              <button
                className="btnIcon detailSocialBtn"
                title="Seen It"
              >
                <i className="fa fa-eye"></i>
              </button>

              <div className="detailUserRating">
                <span className="detailCreditLabel">
                  My Rating
                </span>

                <div className="detailStars"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;