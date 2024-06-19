import './CurrentVideo.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiInstance from '../../brainflix-api.js';
import Description from '../../components/Description/Description.jsx';
import Metadata from '../../components/Metadata/Metadata.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

function CurrentVideo({videosArray, userProps}) {
  const [newCommentsCount, setNewCommentsCount] = useState(0);
  const [currentVideoObject, setVideoObject] = useState(null);
  const videoId = useParams().videoId || videosArray[0].id;

  /* Video details */
  useEffect(() => {
    const fetchVideoObject = async (videoId) => {
      let videoDetailsResponse = await apiInstance.getVideo(videoId);
      if (videoDetailsResponse === false) { // In case videoId URL parameter is invalid
        videoDetailsResponse = await apiInstance.getVideo(videosArray[0].id);
      }
      setVideoObject(videoDetailsResponse);
    }
    fetchVideoObject(videoId);
  }, [videoId, newCommentsCount]);

  if (!currentVideoObject) {
    return (
      <main>
        <section className="loading">
          <p>Loading video...</p>
        </section>
      </main>
    )
  }

  const { title, description, comments, image, ...metadata } = currentVideoObject;
  const imageSrc = `${import.meta.env.VITE_API_URL}/${image}`;
  const videoSrc = `${import.meta.env.VITE_API_URL}/videoAssets/BrainStationSampleVideo.mp4`;

  return (
    <main>
      <section className="current-video">
        <video
          className="current-video__video"
          poster={imageSrc}
          src={videoSrc}
          controls
        ></video>
      </section>
      <section className="secondary">
        <section className="secondary">
          <section className="secondary__section">
            <article className="current-video__article">
              <h1 className="current-video__title">{title}</h1>
              <Metadata metadata={metadata}/>
              <Description description={description}/>
              <p className="current-video__n-comments">{comments.length} Comments</p>
            </article>
            <Comments 
              userProps={userProps} 
              videoObject={currentVideoObject}
              newCommentsCount={newCommentsCount}
              setNewCommentsCount={setNewCommentsCount}
            />
          </section>
          <NextVideos videosArray={videosArray} />
        </section>
      </section>
    </main>
  )
}

export default CurrentVideo;