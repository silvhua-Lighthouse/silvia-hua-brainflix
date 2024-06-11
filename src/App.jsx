import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx';
import VideoUpload from './pages/VideoUpload/VideoUpload.jsx';

function App() {
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';
  return (
    <BrowserRouter>
      <Header avatarSrc={avatarSrc} classesArray={['header__avatar']} />
      <Routes>
        <Route 
          path="/" 
          element={<Home avatarSrc={avatarSrc} />} 
        />
        <Route 
          path="videos/:videoId" 
          element={<Home avatarSrc={avatarSrc}/>} 
        />
        <Route path="upload" element={<VideoUpload />} />
        <Route path="*" element={<Home avatarSrc={avatarSrc} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App