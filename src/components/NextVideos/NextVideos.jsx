import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';
/*
<section>
*/
const NextVideos = ({videosArray}) => {

    const nextVideosArray = videosArray;
    return (
        <section className="next-videos">
            <h2 className="next-videos__heading">Next Videos</h2>
            {
                nextVideosArray.map(
                    videoObject => <VideoCard key={videoObject.id} videoObject={videoObject} />
                )
            }
        </section>
    )
}

export default NextVideos