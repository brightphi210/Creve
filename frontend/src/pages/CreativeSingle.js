import React from 'react'

import CreativeSinglePart from '../components/Creatives/CreativeSinglePart'
import CreativePart from '../components/Creatives/CreativePart'
import Header from '../components/HeaderCompo/Header'

const CreativeSingle = () => {

  return (
    <div>
      <Header />
      <CreativePart />
      <CreativeSinglePart />
    </div>
  )
}

export default CreativeSingle