import './Home.scss';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import VideoDetails from '../../components/VideoDetails/VideoDetails.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

const Home = ({currentVideoObject, avatarSrc, currentVideoId}) => {
  return (
    <main>
      <CurrentVideo currentVideoObject={currentVideoObject} />
      <section className="secondary">
        <VideoDetails 
          currentVideoObject={currentVideoObject} 
          avatarSrc={avatarSrc}
        ></VideoDetails>
        <NextVideos 
          videosArray={videosArray} 
          onSelectVideo={selectVideoObject} 
          currentVideoId={currentVideoId}
        />
      </section>
    </main>
  )
}

export default Home
