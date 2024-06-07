import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom';
import './VideoDetails.scss'
import Description from '../../components/Description/Description.jsx';
import Metadata from '../../components/Metadata/Metadata.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';
import videosArray from '../../data/video-details.json';

function VideoDetails(props) {
    const {avatarSrc} =  props;
    const videoId = useParams().videoId ?? videosArray[0].id;
    // const [currentVideoId, setVideoId] = useState(videosArray[0].id);
    const [currentVideoId, setVideoId] = useState(videoId);
    let currentVideoObject = videosArray[currentVideoId];
  
    const selectVideoObject = (videoId) => {
      setVideoId(videoId)
    }
    currentVideoObject = videosArray.find(videoObject => videoObject.id === videoId);
    // currentVideoObject = videosArray.find(videoObject => videoObject.id === currentVideoId);
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
            <NextVideos 
                videosArray={videosArray} 
                onSelectVideo={selectVideoObject} 
                currentVideoId={videoId}
                // currentVideoId={currentVideoId}
            />
        </section>
        </main>
    )
}

export default VideoDetails;