import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header.jsx'
import videosArray from './data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo.jsx';
import VideoDetails from './components/VideoDetails/VideoDetails.jsx';
import NextVideos from './components/NextVideos/NextVideos.jsx';

function App() {
  const [currentVideoId, setVideoId] = useState(videosArray[0].id);
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';

  let currentVideoObject = videosArray[0];

  const selectVideoObject = (videoId) => {
    setVideoId(videoId)
  }
  currentVideoObject = videosArray.find(videoObject => videoObject.id === currentVideoId);


  return (
    <>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <main>
        <CurrentVideo currentVideoObject={currentVideoObject} />
        <section className="secondary">
          <VideoDetails 
            videosArray={videosArray} avatarSrc={avatarSrc}
            currentVideoId={currentVideoId}
          ></VideoDetails>
          <NextVideos 
            videosArray={videosArray} onSelectVideo={selectVideoObject} currentVideoId={currentVideoId}
          />
        </section>
      </main>

    </>
  )
}

export default App