import { useParams } from 'react-router-dom';
import './VideoDetails.scss'
import Description from '../../components/Description/Description.jsx';
import Metadata from '../../components/Metadata/Metadata.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';
import videosArray0 from '../../data/video-details.json';
import { useEffect, useState } from 'react';
import apiInstance from '../../brainflix-api.js';

function VideoDetails(props) {
  const {avatarSrc} =  props;
  
  const [videosArray, setVideosArray] = useState([]);
  const [videoId, setVideoId] = useState(useParams().videoId);
  const [currentVideoObject, setVideoObject] = useState(null);
  // const [currentVideoObject, setVideoObject] = useState(videosArray0[0]);
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await apiInstance.getVideosArray();
      setVideosArray(response);
      if (!videoId) {
        setVideoId(response[0].id);
      }
      setVideoObject(videosArray.find(videoObject => videoObject.id === (videoId ?? response[0].id)));
    }
    fetchVideos();

  }, []);


  useEffect(() => {
    // const updateVideoObject = () => {
    //   setVideoObject(videosArray0.find(videoObject => videoObject.id === (videoId ?? videosArray0[0].id)));
    // }
    // updateVideoObject();
    console.log('useParams().videoId changed')
  }, [useParams().videoId])

  /* Video details */
  useEffect(() => {
    const fetchVideoObject = async (videoId) => {
      const videoDetailsResponse = await apiInstance.getVideo(videoId);
      setVideoObject(videoDetailsResponse);
      console.log('video details response', videoDetailsResponse);
    }
    fetchVideoObject(videoId);
    console.log('new videoId', videoId);
  }, [videoId]);

  // console.log('current video object', currentVideoObject, '\nvideoId', videoId);


  if (videosArray.length === 0 || !currentVideoObject) {
    return (
      <p> Just a moment while we load the recipe details....</p>
    );
  }
  console.log('videoId\n', videoId, (!videoId));
  console
  const { title, description, comments, ...metadata } = currentVideoObject;

  return (
    <main>
    <CurrentVideo currentVideoObject={currentVideoObject} />
    <section className="secondary">
      <section className="video-details">
        <article>
          <h1 className="current-video__title">{title}</h1>
          <Metadata metadata={metadata}/>
          <Description description={description}/>
          <p className="current-video__n-comments">{comments.length} Comments</p>
        </article>
        <Comments avatarSrc={avatarSrc} videoObject={currentVideoObject}/>
      </section>
      <NextVideos videosArray={videosArray} currentVideoId={videoId} />
    </section>
    </main>
  )
}

export default VideoDetails;