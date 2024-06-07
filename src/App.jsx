import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header.jsx'
import videosArray from './data/video-details.json';
import VideoDetails from './pages/VideoDetails/VideoDetails.jsx';

function App() {
  const [currentVideoId, setVideoId] = useState(videosArray[0].id);
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';

  let currentVideoObject = videosArray[0];

  const selectVideoObject = (videoId) => {
    setVideoId(videoId)
  }
  currentVideoObject = videosArray.find(videoObject => videoObject.id === currentVideoId);


  return (
    <BrowserRouter>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <Routes>
        <Route path="/" element={
          <VideoDetails 
            currentVideoObject={currentVideoObject} 
            avatarSrc={avatarSrc} 
          />
        } />
      </Routes>

    </BrowserRouter>
  )
}

export default App