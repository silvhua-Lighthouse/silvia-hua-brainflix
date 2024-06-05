import './Comments.scss'
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentsCard from '../CommentsCard/CommentsCard';
/* 
<div class="comments-section">
    <div class="comments__form-container">
        <div class="comments-form__avatar">
            <img src="./assets/images/Mohan-muruge.jpg" alt="user-avatar" class="comments__user-avatar"/>
        </div>
        <form class="comments__form">
            <div class=comments__input>
                <label for="comment-field" class="comments__input-label">Join the conversation</label>
                <textarea name="userComment" id="user-name" class="comments__input-field" rows="4" placeholder="Add a new comment" minlength=2></textarea>
            </div>
            <button type="submit" class="button">comment</button>
        </form>
    </div>
    <div class="comments">
        <!-- DOM elements added here -->
    </div>
</div>
*/
function Comments(props) {
    const avatarProps = {
        avatarSrc: props.avatarSrc,
        classesArray: ['comments__user-avatar']
    }
    const { videoObject } = props;
    const videoCommentsArray = videoObject.comments;
    const videoCommentCards = videoCommentsArray.map(commentObject => {
        return <CommentsCard key={commentObject.id} comments={commentObject}/>
    })
    return (
        <div className="comments-section">
            <CommentsForm avatar={avatarProps}/>
            {videoCommentCards}
        </div>
    )
}

export default Comments