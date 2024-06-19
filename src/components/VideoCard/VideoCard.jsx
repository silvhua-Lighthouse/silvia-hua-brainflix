import './VideoCard.scss';

const VideoCard = (props) => {
  const {videoObject} = props;
  const { title, channel, image } = videoObject;
  const imageSrc = `${import.meta.env.VITE_API_URL}/${image}`;

  return (
    <div className="video-card">
      <div className="video-card__image-div">
        <img src={imageSrc} className="video-card__image" alt={`'${title}' video thumbnail`}/>
      </div>
      <div className="video-card__text-container">
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__channel">{channel}</p>
      </div>
    </div>
  )
}

export default VideoCard