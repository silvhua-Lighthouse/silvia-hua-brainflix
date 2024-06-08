import { useParams } from 'react-router-dom';
import './VideoDetails.scss'
import Description from '../../components/Description/Description.jsx';
import Metadata from '../../components/Metadata/Metadata.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';
// import videosArray from '../../data/video-details.json';
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
      setVideoId(videoId ?? response[0].id);
    }
    fetchVideos();

  }, [])
  const [currentVideoObject, setVideoObject] = useState({});

  useEffect(() => {
    const fetchVideoObject = async (videoId) => {
      const videoDetailsResponse = await apiInstance.getVideo(videoId);
      setVideoObject(videoDetailsResponse);
    }
    fetchVideoObject(videoId);
  }, [videoId]);

  const { title, description, comments, ...metadata } = currentVideoObject;
  console.log(currentVideoObject)

  return (
    <main>
    <CurrentVideo currentVideoObject={currentVideoObject} />
    <section className="secondary">
      <section className="video-details">
        <article>
          <h1 className="current-video__title">{title}</h1>
          {/* <Metadata metadata={metadata}/>
          <Description description={description}/>
          <p className="current-video__n-comments">{comments.length} Comments</p> */}
        </article>
        {/* <Comments avatarSrc={avatarSrc} videoObject={currentVideoObject}/> */}
      </section>
      <NextVideos videosArray={videosArray} currentVideoId={videoId} />
    </section>
    </main>
  )
}

export default VideoDetails;