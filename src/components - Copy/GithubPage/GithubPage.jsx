import React from 'react'
import './GithubPage.css'
import GithubCard from '../cards/GithubCard'
const GithubPage = () => {
  return (
      <div className='main-github-page'>
        <div className='github-pic'>
           <h1 className='github-heading'>Blender, everywhere.</h1>
           <div className='github-info'>Anywhere you are, there's a community for you.
Find independent Blender groups all around the globe.</div>
        </div>
        <div className='codes'>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
            <GithubCard></GithubCard>
        </div>
      </div>
  )
}

export default GithubPage
