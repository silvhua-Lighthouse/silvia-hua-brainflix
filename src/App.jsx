import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header.jsx'
import videosArray from './data/video-details.json';
import VideoDetails from './pages/VideoDetails/VideoDetails.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';

  let currentVideoObject = videosArray[0];


  return (
    <BrowserRouter>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <Routes>
        <Route path="/" element={
          <Home 
            currentVideoObject={videosArray[0]} 
            avatarSrc={avatarSrc} 
          />
        } />
        <Route path="videodetails" element={
          <VideoDetails 
            // currentVideoObject={currentVideoObject} 
            avatarSrc={avatarSrc} 
          />
        } />
      </Routes>

    </BrowserRouter>
  )
}

export default App