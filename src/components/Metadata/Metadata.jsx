import { useState } from 'react'
import formatTimestamp, {formatNumber} from '../globalFunctions';
import './Metadata.scss';
import likesIcon from '../../assets/images/likes.svg';
import viewsIcon from '../../assets/images/views.svg'

function Metadata(props) {
    const {channel, timestamp, views, likes} = props.metadata;
    return (
        <>
        <section className="current-video__metadata">
            <div className="current-video__metadata--left">
                <p className="current-video__channel">{channel}</p>
                <p className="current-video__timestamp">{formatTimestamp(timestamp)}</p>
            </div>
            <div className="current-video__metadata--right">
                <span><img src={viewsIcon} className="current-video__metadata-icon"/><p className="current-video__views">{formatNumber(views)}</p></span>
                <span><img src={likesIcon} className="current-video__metadata-icon"/><p className="current-video__likes">{formatNumber(likes)}</p></span>
            </div>
        </section>
        </>
    )
}

export default Metadata;