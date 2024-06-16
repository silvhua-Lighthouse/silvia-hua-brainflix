import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx';
import VideoUpload from './pages/VideoUpload/VideoUpload.jsx';

function App() {
  const avatarSrc = '../../src/assets/images/Mohan-muruge.jpg';
  const userName = 'Anonymous';
  const userProps = {
    avatarSrc: avatarSrc,
    userName: userName
  }
  return (
    <BrowserRouter>
      <Header userProps={userProps} classesArray={['header__avatar']} />
      <Routes>
        <Route 
          path="/" 
          element={<Home userProps={userProps} />} 
        />
        <Route 
          path="videos/:videoId" 
          element={<Home userProps={userProps}/>} 
        />
        <Route
          path="upload"
          element={<VideoUpload userProps={userProps}/>}
        />
        <Route path="*" element={<Home userProps={userProps} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App