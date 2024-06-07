import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';
/*
<section>
*/
const NextVideos = ({videosArray, onSelectVideo, currentVideoId}) => {
    const nextVideosArray = videosArray.filter(video => video.id !== currentVideoId);
    return (
        <aside className="next-videos">
            <h2 className="next-videos__heading">Next Videos</h2>
            {
                nextVideosArray.map(
                    videoObject => 
                    <VideoCard key={videoObject.id} videoObject={videoObject} onSelectVideo={onSelectVideo}/>
                )
            }
        </aside>
    )
}

export default NextVideos