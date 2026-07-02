import React from 'react'

import Landingnavbar from '../components/public/Landingnavbar'
import LandingFooter from '../components/public/LandingFooter'
import JoinCTA from '../components/public/JoinCTA'
import LandingHero from '../components/public/LandingHero'
import LandingTrending from '../components/public/LandingTrending'
import LandingPopular from '../components/public/LandingPopular'
import LandingGenre from '../components/public/LandingGenre'

const Landing = () => {
  return (
    <>
   <Landingnavbar/>
   <LandingHero/>
   <LandingTrending/>
   <LandingPopular/>
   <LandingGenre/>
   <JoinCTA/>
   <LandingFooter/>
    </>
  )
}

export default Landing