import './Home.scss';
import VideoDetails from '../VideoDetails/VideoDetails';

const Home = ({avatarSrc, videosArray}) => {
  
  return (
    <>
    <VideoDetails avatarSrc={avatarSrc} videosArray={videosArray} />
    </>
  )
}

export default Home
