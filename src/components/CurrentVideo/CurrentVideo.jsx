import './CurrentVideo.scss';

function CurrentVideo(props) {
    const {image} = props.video;
    return (
        <section className="current-video">
            <video className="current-video__video" poster={image} controls></video>
        </section>
    )
}

export default CurrentVideo;