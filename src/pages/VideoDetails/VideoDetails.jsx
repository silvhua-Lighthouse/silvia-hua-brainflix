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
    let currentVideoObject = videosArray[videoId];
  
    currentVideoObject = videosArray.find(videoObject => videoObject.id === videoId);
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
                currentVideoId={videoId}
            />
        </section>
        </main>
    )
}

export default VideoDetails;