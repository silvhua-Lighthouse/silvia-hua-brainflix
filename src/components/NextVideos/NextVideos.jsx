import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';
import { NavLink } from 'react-router-dom';

const NextVideos = ({videosArray, currentVideoId}) => {
  const nextVideosArray = videosArray.filter(video => video.id !== currentVideoId);
  return (
    <aside className="next-videos">
    <h2 className="next-videos__heading">Next Videos</h2>
    {
      nextVideosArray.map(videoObject => 
        <NavLink key={videoObject.id} to={`/videos/${videoObject.id}`}>
          <VideoCard key={videoObject.id} videoObject={videoObject} />
        </NavLink>
      )
    }
    </aside>
  )
}

export default NextVideos