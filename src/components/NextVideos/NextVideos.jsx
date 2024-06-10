import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Description from '../../components/Description/Description.jsx';
import Metadata from '../../components/Metadata/Metadata.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import apiInstance from '../../brainflix-api.js';

const NextVideos = ({videoId, videosArray, avatarSrc}) => {
  const currentVideoId = videoId || videosArray[0].id;
  const nextVideosArray = videosArray.filter(video => video.id !== currentVideoId);
  const [currentVideoObject, setVideoObject] = useState(null);
  // const [videoId, setVideoId] = useState(currentVideoId);

  /* Video details */
  useEffect(() => {
    const fetchVideoObject = async (videoId) => {
      const videoDetailsResponse = await apiInstance.getVideo(videoId);
      setVideoObject(videoDetailsResponse);
      // console.log('video details response', videoDetailsResponse);
    }
    fetchVideoObject(videoId);
    console.log('new videoId', videoId);
  }, [videoId]);

  if (!currentVideoObject) {
      return <main>Loading...</main>
  }
  const {image} = currentVideoObject;

  const { title, description, comments, ...metadata } = currentVideoObject;

  // return (
  //   <aside className="next-videos">
  //   <h2 className="next-videos__heading">Next Videos</h2>
  //   {
  //     nextVideosArray.map(videoObject => 
  //       <NavLink key={videoObject.id} to={`/videos/${videoObject.id}`}>
  //         <VideoCard key={videoObject.id} videoObject={videoObject} />
  //       </NavLink>
  //     )
  //   }
  //   </aside>
  // )

  return (
    <>
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
      </section>
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
    </section>
    </>

  )
}

export default NextVideos