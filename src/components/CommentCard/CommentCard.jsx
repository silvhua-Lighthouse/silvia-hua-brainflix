import formatTimestamp from '../globalFunctions';

/* This is the HTML to re-create using DOM:
<div class="comment-card">
    <div class="comment-card__avatar-div--posted">
    </div>
    <div class="comment-card__text-container">
        <div class="comment-card__metadata">
            <h5 class="comment-card__name">Victor Pinto</h5>
            <p class="comment-card__date">11/02/2023</p>
        </div>
        <p class="comment-card__comment">
            This is art.
        </p>
    </div>
</div>
*/
    
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
