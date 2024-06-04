import './VideoDetails.scss'
import Description from '../Description/Description';

function VideoDetails(props) {

    return (
        <section className="video-details">
            <Description videoDetails={props.videoDetails}/>
        </section>
    )

}

export default VideoDetails;