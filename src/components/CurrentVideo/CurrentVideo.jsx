import './CurrentVideo.scss';

function CurrentVideo({currentVideoObject}) {
    const {image} = currentVideoObject;
    return (
        <section className="current-video">
            <video className="current-video__video" poster={image} controls></video>
        </section>
    )
}

export default CurrentVideo;