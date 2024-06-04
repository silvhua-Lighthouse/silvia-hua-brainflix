import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header.jsx'
import videosArray from './data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo.jsx';
import VideoDetails from './components/VideoDetails/VideoDetails.jsx';

const video = videosArray[0];

function App() {
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';

  return (
    <>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <main>
        <CurrentVideo video={video} />
        <VideoDetails videoDetails={video}></VideoDetails>
        <section>section2</section>
      </main>

    </>
  )
}

export default App