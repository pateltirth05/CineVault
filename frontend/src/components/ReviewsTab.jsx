import React from 'react'
import "../style/style.css"
import "../style/moviedetails.css"
const ReviewsTab = () => {
  return (
    <>
     <div id="reviewsTab" class="detailTabContent hidden">
    <div class="detailReviewsHeader">
      <h3 class="detailBlockTitle">Community Reviews</h3>
      <button class="btnPrimary btnSm"><i class="fa fa-pen"></i> Write a Review</button>
    </div>
    <div class="detailReviewList" id="reviewList"></div>
  </div>

    </>
  )
}

export default ReviewsTab