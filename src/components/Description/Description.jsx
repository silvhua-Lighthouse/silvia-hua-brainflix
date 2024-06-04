import { useState } from 'react'
import './Description.scss';
import Metadata from '../Metadata/Metadata';

function Description(props) {
    console.log('Description prop', props)
    const { title, description, ...metadata } = props.videoDetails;
    return (
        <article>
            <h1 className="current-video__title">{title}</h1>
            <Metadata metadata={metadata}/>
            <p>{description}</p>

        </article>

    )
}

export default Description