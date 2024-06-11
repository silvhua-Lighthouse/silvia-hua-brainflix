import './VideoCard.scss';

const VideoCard = (props) => {
    const {videoObject} = props;
    const {title, channel, image} = videoObject;

    return (
        <div className="video-card">
            <img src={image} className="video-card__image" alt={`'${title}' video thumbnail`}/>
            <div className="video-card__text-container">
                <h3 className="video-card__title">{title}</h3>
                <p>{channel}</p>
            </div>
        </div>
    )
}

export default VideoCard