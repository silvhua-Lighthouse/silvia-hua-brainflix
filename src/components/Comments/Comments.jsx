import './Comments.scss'
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentCard from '../CommentCard/CommentCard';
// import {useEffect, useState} from 'react';

function Comments(props) {
    // const [apiResponse, setApiResponse] = useState(false);

    const avatarProps = {
        avatarSrc: props.avatarSrc,
        classesArray: ['comments-form__user-avatar']
    }
    const { videoObject, setApiResponse } = props;
    let videoCommentsArray = videoObject.comments;
    videoCommentsArray = videoCommentsArray.sort((a, b) => b.timestamp - a.timestamp);

    // useEffect(() => {

    // }, [apiResponse])

    const videoCommentCards = videoCommentsArray.map(commentObject => {
        return <CommentCard key={commentObject.id} comments={commentObject}/>
    })
    return (
        <div className="comments-section">
            <CommentsForm 
                avatar={avatarProps} 
                videoId={videoObject.id} 
                videoCommentsArray={videoCommentsArray} 
                setApiResponse={setApiResponse}
            />
            {videoCommentCards}
        </div>
    )
}

export default Comments