import './Home.scss';
import VideoDetails from '../VideoDetails/VideoDetails';

const Home = ({avatarSrc, currentVideoObject}) => {
  const { title, description, comments, ...metadata } = currentVideoObject;
  return (
    <>
    <VideoDetails 
      currentVideoObject={currentVideoObject} 
      avatarSrc={avatarSrc} 
    />
    </>
  )
}

export default Home
