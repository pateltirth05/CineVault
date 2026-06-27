import React from 'react'
import '../style/style.css'
const CTABanner = () => {
  return (
  <>
  <section class="section" style={{paddinTop:'0'}}>
  <div class="container">
    <div style={{background:"linear-gradient(135deg,rgba(232,185,79,0.08),rgba(192,57,43,0.08))",border:'1px solid var(--borderGold)',borderRadius:'var(--radiusLg)',padding:'4rem',textAlign:'center'}}>
      <p class="label" style={{marginBottom:'1rem'}}>✨ Powered by AI</p>
      <h2 class="displayFont" style={{fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:'900',marginBottom:'1rem'}}>Your Perfect Movie is Waiting</h2>
      <p class="sectionSubtitle" style={{maxWidth:'500px',margin:'0 auto 2rem'}}>Tell CineVault your mood, your favorite genres, and what you've loved before. Our AI will find films made for you.</p>
      <div class="flex flexCenter gap2">
        <a href="recommendations.html" class="btnPrimary btnLg">Get My Recommendations</a>
        <a href="signup.html" class="btnSecondary btnLg">Create Free Account</a>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default CTABanner