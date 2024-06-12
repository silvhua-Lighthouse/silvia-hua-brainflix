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
    console.log('CurrentVideo: new videoId\n', videoId);
  }, [videoId]);

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

  return (
    <main>
      <section className="current-video">
        <video className="current-video__video" poster={image} controls></video>
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
              avatarSrc={avatarSrc} 
              videoObject={currentVideoObject}
            />
          </section>
          <NextVideos videosArray={videosArray} />
        </section>
      </section>
    </main>
  )
}

export default CurrentVideo;