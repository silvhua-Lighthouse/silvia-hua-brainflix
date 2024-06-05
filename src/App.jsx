import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header.jsx'
import videosArray from './data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo.jsx';
import VideoDetails from './components/VideoDetails/VideoDetails.jsx';
import NextVideos from './components/NextVideos/NextVideos.jsx';

const video = videosArray[0];
function App() {
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';

  return (
    <>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <main>
        <CurrentVideo video={video} />
        <section className="secondary">
          <VideoDetails videosArray={videosArray} avatarSrc={avatarSrc}></VideoDetails>
          <NextVideos videosArray={videosArray}/>
        </section>
      </main>

    </>
  )
}

export default App