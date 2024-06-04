import { useState } from 'react'
import formatDate, {formatNumber} from '../globalFunctions';
import './Metadata.scss';
import likesIcon from '../../assets/images/likes.svg';
import viewsIcon from '../../assets/images/views.svg'

function VideoMetadata(props) {
    const {author, date, views, likes} = props.metadata;
    return (
        <>
        <section className="article__metadata">
            <div className="article__metadata--left">
                <p className="article__author">{author}</p>
                <p className="article__date">{formatDate(date)}</p>
            </div>
            <div className="article__metadata--right">
                <span><img src={viewsIcon} className="article__metadata-icon"/><p className="article__views">{formatNumber(views)}</p></span>
                <span><img src={likesIcon} className="article__metadata-icon"/><p className="article__likes">{formatNumber(likes)}</p></span>
            </div>
        </section>
        </>
    )
}

export default VideoMetadata;