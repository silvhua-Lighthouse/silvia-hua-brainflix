import { useParams } from 'react-router-dom';
import './Home.scss'
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import { useEffect, useState } from 'react';
import apiInstance from '../../brainflix-api.js';

function VideoDetails(props) {
  const {avatarSrc} =  props;
  const [videosArray, setVideosArray] = useState([]);
  const [videoId, setVideoId] = useState(useParams().videoId);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await apiInstance.getVideosArray();
      setVideosArray(response);
      if (!videoId) {
        setVideoId(response[0].id);
      }
    }
    fetchVideos();

  }, []);

  if (videosArray.length === 0) {
    return (
      <main>Loading...</main>
    );
  }

  return (
    <main>
      <CurrentVideo 
      // videoId={videoId} 
      videosArray={videosArray} 
      avatarSrc={avatarSrc} 
      />
    </main>
  )
}

export default VideoDetails;