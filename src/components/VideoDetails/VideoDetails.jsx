import './VideoDetails.scss'
import Article from '../Article/Article';

function VideoDetails(props) {

    return (
        <section className="video-details">
            <Article article={props.article}/>
        </section>
    )

}

export default VideoDetails;