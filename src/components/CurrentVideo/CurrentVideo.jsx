import './CurrentVideo.scss';
import { useEffect, useState } from 'react';
import apiInstance from '../../brainflix-api.js';

function CurrentVideo({videoId}) {
    const [currentVideoObject, setVideoObject] = useState(null);

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

    if (!currentVideoObject) {
        return <p>Loading...</p>
    }
    const {image} = currentVideoObject;


    return (
        <section className="current-video">
            <video className="current-video__video" poster={image} controls></video>
        </section>
    )
}

export default CurrentVideo;