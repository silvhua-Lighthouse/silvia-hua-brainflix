import formatTimestamp from '../globalFunctions';

/* This is the HTML to re-create using DOM:
<div class="comments__card">
    <div class="comments__avatar-div--posted">
    </div>
    <div class="comments__text-container">
        <div class="comments__metadata">
            <h5 class="comments__name">Victor Pinto</h5>
            <p class="comments__date">11/02/2023</p>
        </div>
        <p class="comments__comment">
            This is art.
        </p>
    </div>
</div>
*/
    
function CommentsCard(props) {
    const {name, timestamp, comment} = props.comments;

    return (
        <div className="comments__card">
            <div className="avatar-div comments__avatar-div">
            </div>
            <div className="comments__text-container">
                <div className="comments__metadata">
                    <h5 className="comments__name">{name}</h5>
                    <p className="comments__date">{formatTimestamp(timestamp)}</p>
                </div>
                <p className="comments__comment">{comment}</p>
            </div>
        </div>
    )
}

export default CommentsCard;
