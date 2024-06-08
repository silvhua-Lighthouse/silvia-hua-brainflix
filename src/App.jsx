import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header.jsx'
import VideoDetails from './pages/VideoDetails/VideoDetails.jsx';
import Home from './pages/Home/Home.jsx';
import { useEffect, useState } from 'react';
import apiInstance from './brainflix-api.js';

function App() {
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';
  const [videosArray, setVideosArray] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await apiInstance.getVideosArray();
      setVideosArray(response);
    }
    fetchVideos();
  }, [])

  return (
    <BrowserRouter>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <Routes>
        <Route path="/" element={<Home avatarSrc={avatarSrc} />} />
        <Route 
          path="videos/:videoId" 
          element={<VideoDetails avatarSrc={avatarSrc} videosArray={videosArray}/>} 
        />
        <Route path="*" element={<Home avatarSrc={avatarSrc} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App