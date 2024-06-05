import './VideoCard.scss';

const VideoCard = (props) => {
    const {videoObject, onSelectVideo} = props;
    const {id, title, channel, image} = videoObject;
    console.log('VideoCard props', props);

    const clickHandler = () => {
        console.log(`Selecting video ${id} ${title}`);
        onSelectVideo(id);
    }
    return (
        <div onClick={clickHandler} className="video-card">
            <img src={image} className="video-card__image" />
            <div className="video-card__text-container">
                <h3 className="video-card__title">{title}</h3>
                <p>{channel}</p>
            </div>
        </div>
    )
}

export default VideoCard