import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import apiInstance from '../../utils/brainflix-api.js';

function VideoDetails({userProps}) {
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
      userProps={userProps} 
    />
  )
}

export default VideoDetails;