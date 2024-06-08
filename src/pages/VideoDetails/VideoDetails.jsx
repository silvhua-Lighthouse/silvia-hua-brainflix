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
  // const {avatarSrc, videosArray, defaultId} =  props;
  
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
  console.log(videosArray);
  console.log('video', videoId);


  
  // const [videoId, setVideoId] = useState(defaultId);
  // const [videoId, setVideoId] = useState(useParams().videoId ?? defaultId);
  // const [videoId, setVideoId] = useState(useParams().videoId ?? "84e96018-4022-434e-80bf-000ce4cd12b8");
  // const [videoId, setVideoId] = useState(useParams().videoId ?? videosArray[0].id);


  // async function getInitialVideoObject() {
  //   defaultVideoObject = await apiInstance.getVideo(videoId);
  //   console.log('default video object', defaultVideoObject);
  //   setVideoObject(defaultVideoObject);
  // }
  // getInitialVideoObject();


  // const videoId = useParams().videoId ?? videosArray[0].id;

  // useEffect(() => {
  //   const fetchVideoObject = async (videoId) => {
  //     const videoDetailsResponse = await apiInstance.getVideo(videoId);
  //     // console.log('current video object', videoDetailsResponse)
  //     setVideoObject(videoDetailsResponse);
  //     return videoDetailsResponse;
  //   }
  //   fetchVideoObject(videoId);
  //   // setVideoObject(videoDetailsResponse);
  //   // console.log(videoDetailsResponse);

  // }, []);

  // let currentVideoObject = videosArray[videoId];

  // currentVideoObject = videosArray.find(videoObject => videoObject.id === videoId);
  const { title, description, comments, ...metadata } = currentVideoObject;
  // console.log(currentVideoObject)

  return (
    <main>
    {/* <CurrentVideo currentVideoObject={currentVideoObject} />
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
    </section> */}
    </main>
  )
}

export default VideoDetails;