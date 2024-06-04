import { useState } from 'react'
import formatDate, {formatNumber} from '../globalFunctions';
import './Description.scss';
import VideoMetadata from '../Metadata/Metadata';

function Description(props) {
    const { title, body, ...metadata } = props.article;
    return (
        <article>
            <h1 className="article__title">{title}</h1>
            <VideoMetadata metadata={metadata}/>
            <p>{body}</p>

        </article>

    )
}

export default Description