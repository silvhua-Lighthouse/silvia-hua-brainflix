import formatTimestamp, {formatNumber} from '../globalFunctions';
import likesIcon from '../../assets/images/likes.svg';
import viewsIcon from '../../assets/images/views.svg';
import './Metadata.scss';

function Metadata(props) {
    const {channel, timestamp, views, likes} = props.metadata;
    return (
        <>
        <section className="metadata">
            <div className="metadata--left">
                <p className="metadata__channel">{channel}</p>
                <p className="metadata__timestamp">{formatTimestamp(timestamp)}</p>
            </div>
            <div className="metadata--right">
                <span><img src={viewsIcon} className="metadata__icon"/><p className="metadata__views">{formatNumber(views)}</p></span>
                <span><img src={likesIcon} className="metadata__icon"/><p className="metadata__likes">{formatNumber(likes)}</p></span>
            </div>
        </section>
        </>
    )
}

export default Metadata;
