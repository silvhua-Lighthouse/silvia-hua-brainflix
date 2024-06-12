import formatTimestamp from '../globalFunctions';
    
function CommentCard(props) {
    const {name, timestamp, comment} = props.comments;

    return (
        <div className="comment-card">
            <div className="avatar-div">
            </div>
            <div className="comment-card__text-container">
                <div className="comment-card__metadata">
                    <h5 className="comment-card__name">{name}</h5>
                    <p className="comment-card__date">{formatTimestamp(timestamp)}</p>
                </div>
                <p className="comment-card__comment">{comment}</p>
            </div>
        </div>
    )
}

export default CommentCard;
