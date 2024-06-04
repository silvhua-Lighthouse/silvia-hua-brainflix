import './CurrentVideo.scss';

function CurrentVideo(props) {
    const {image} = props.video;
    return (
        <section>
            <video className="current-video" poster={image}></video>

        </section>
    )
}

export default CurrentVideo;