import './VideoDetails.scss'
import Description from '../Description/Description';
import Metadata from '../Metadata/Metadata';

function VideoDetails(props) {
    const { title, description, ...metadata } = props.videoDetails;

    return (
        <section className="video-details">
            <article>
                <h1 className="current-video__title">{title}</h1>
                <Metadata metadata={metadata}/>
                <Description description={description}/>
            </article>
        </section>
    )

}

export default VideoDetails;