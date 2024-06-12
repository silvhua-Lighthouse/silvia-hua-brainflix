import './Comments.scss'
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentCard from '../CommentCard/CommentCard';

function Comments(props) {
    const avatarProps = {
        avatarSrc: props.avatarSrc,
        classesArray: ['comments-form__user-avatar']
    }
    const { videoObject } = props;
    const videoCommentsArray = videoObject.comments;
    const videoCommentCards = videoCommentsArray.map(commentObject => {
        return <CommentCard key={commentObject.id} comments={commentObject}/>
    })
    return (
        <div className="comments-section">
            <CommentsForm avatar={avatarProps} videoId={videoObject.id}/>
            {videoCommentCards}
        </div>
    )
}

export default Comments