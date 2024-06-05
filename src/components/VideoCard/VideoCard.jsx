import './VideoCard.scss';

const VideoCard = ({videoObject}) => {
    const {id, title, channel, image} = videoObject;
    return (
        <div className="video-card">
            <h3 className="video-card__title">{title}</h3>
        </div>
    )
}

export default VideoCard