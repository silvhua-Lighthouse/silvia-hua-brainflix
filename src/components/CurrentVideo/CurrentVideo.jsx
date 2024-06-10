import './CurrentVideo.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiInstance from '../../brainflix-api.js';
import Description from '../../components/Description/Description.jsx';
import Metadata from '../../components/Metadata/Metadata.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

function CurrentVideo({videosArray, avatarSrc}) {
  const [currentVideoObject, setVideoObject] = useState(null);
  const [videoId, setVideoId] = useState(useParams().videoId || videosArray[0].id);

  /* Video details */
  useEffect(() => {
    const fetchVideoObject = async (videoId) => {
      const videoDetailsResponse = await apiInstance.getVideo(videoId);
      setVideoObject(videoDetailsResponse);
      // console.log('video details response', videoDetailsResponse);
    }
    fetchVideoObject(videoId);
    console.log('new videoId', videoId);
  }, [useParams().videoId]);

  if (!currentVideoObject) {
      return <main>Loading...</main>
  }
  const {image} = currentVideoObject;

  const { title, description, comments, ...metadata } = currentVideoObject;

  return (
    <section className="secondary">
      <section className="current-video">
        <video className="current-video__video" poster={image} controls></video>
      </section>
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
        <NextVideos 
          videosArray={videosArray} 
          // currentVideoId={videoId} 
        />
      </section>
    </section>
  )
}

export default CurrentVideo;