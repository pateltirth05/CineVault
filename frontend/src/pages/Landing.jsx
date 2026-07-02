import React from 'react'

import Landingnavbar from '../components/public/Landingnavbar'
import LandingFooter from '../components/public/LandingFooter'
import JoinCTA from '../components/public/JoinCTA'
import LandingHero from '../components/public/LandingHero'
import LandingTrending from '../components/public/LandingTrending'
import LandingPopular from '../components/public/LandingPopular'
import LandingGenre from '../components/public/LandingGenre'
import LandingTopRated from '../components/public/LandingTopRated'
import LandingTrailer from '../components/public/LandingTrailer'

const Landing = () => {
  return (
    <>
   <Landingnavbar/>
   <LandingHero/>
   <LandingTrending/>
   <LandingPopular/>
   <LandingTopRated/>
   <LandingTrailer/>
   <LandingGenre/>
   <JoinCTA/>
   <LandingFooter/>
    </>
  )
}

export default Landing