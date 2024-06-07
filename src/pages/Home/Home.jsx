import './Home.scss';
import VideoDetails from '../VideoDetails/VideoDetails';

const Home = ({avatarSrc}) => {
  
  return (
    <>
    <VideoDetails avatarSrc={avatarSrc} />
    </>
  )
}

export default Home
