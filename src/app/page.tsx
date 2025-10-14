import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeaturesHighlight from './components/FeaturesHighlight'
import UseCases from './components/UseCases'
import Integrations from './components/Integrations'
import GgufSection from './components/Gguf'
import Cta1 from './components/Cta1'
const Home = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <HowItWorks />
      <FeaturesHighlight />
      <UseCases />
      <Integrations />
      <GgufSection />
      <Cta1 />	
    </div>
  )
}

export default Home