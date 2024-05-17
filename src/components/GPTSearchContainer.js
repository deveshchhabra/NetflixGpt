import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BACK_GROUND } from '../utils/constant'

const GPTSearchContainer = () => {
  return (
    <>
     <div className="fixed -z-10 ">
        <img className="  " src={BACK_GROUND} alt="logo" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  )
}

export default GPTSearchContainer
