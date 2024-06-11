import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Home.scss'
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import apiInstance from '../../brainflix-api.js';

function VideoDetails({avatarSrc}) {
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
      <main>
        <section className="loading">
          <div>Loading video...</div>
        </section>
      </main>
    )
  }

  return (
    <CurrentVideo 
      videosArray={videosArray} 
      avatarSrc={avatarSrc} 
    />
  )
}

export default VideoDetails;