import './Home.scss';
import VideoDetails from '../VideoDetails/VideoDetails';

const Home = ({avatarSrc, videosArray, defaultId}) => {
  
  return (
    <>
    <VideoDetails 
      avatarSrc={avatarSrc} 
      videosArray={videosArray} 
      defaultId={defaultId}
      />
    </>
  )
}

export default Home
