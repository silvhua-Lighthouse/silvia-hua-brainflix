import { useState } from 'react'
import './Description.scss';
function Description({description}) {
    return (
        <>
        <p className="current-video__description">{description}</p>
        </>
    )
}

export default Description