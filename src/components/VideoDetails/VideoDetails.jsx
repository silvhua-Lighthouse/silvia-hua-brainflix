import { useState } from 'react'
import './VideoDetails.scss'
import Description from '../Description/Description';
import Metadata from '../Metadata/Metadata';
import Comments from '../Comments/Comments.jsx';

function VideoDetails(props) {
    const {avatarSrc, videosArray} =  props;
    const [videoId, setVideoId] = useState(0);
    let videoObject = videosArray[videoId]
    const { title, description, comments, ...metadata } = videoObject;

    return (
        <section className="video-details">
            <article>
                <h1 className="current-video__title">{title}</h1>
                <Metadata metadata={metadata}/>
                <Description description={description}/>
                <p className="current-video__n-comments">{comments.length} Comments</p>
            </article>
        <Comments avatarSrc={avatarSrc} videoObject={videoObject}/>
        </section>
    )
}

export default VideoDetails;