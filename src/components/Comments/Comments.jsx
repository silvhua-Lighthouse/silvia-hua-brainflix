import './Comments.scss'
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentsCard from '../CommentsCard/CommentsCard';
/* 
<section class="comments-section">
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
</section>
*/
function Comments(props) {
    const avatarProps = {
        avatarSrc: props.avatarSrc,
        classesArray: ['comments__user-avatar']
    }
    const { videosArray } = props;
    const videoObject = videosArray[0];
    const videoCommentsArray = videoObject.comments;
    const videoCommentCards = videoCommentsArray.map(commentObject => {
        return <CommentsCard key={commentObject.id} comments={commentObject}/>
    })
    return (
        <section className="comments-section">
            <CommentsForm avatar={avatarProps}/>
            {videoCommentCards}
        </section>
    )
}

export default Comments