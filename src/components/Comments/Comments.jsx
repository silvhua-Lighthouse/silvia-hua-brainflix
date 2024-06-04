import './Comments.scss'
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentsCard from '../CommentsCard/CommentsCard';
/* 
<section class="comments-section">
    <div class="comments-form">
        <div class="comments-form__avatar">
            <img src="./assets/images/Mohan-muruge.jpg" alt="user-avatar" class="comments__user-avatar"/>
        </div>
        <form class="comments__form">
            <label for="name-field" class="comments__input-label">Name</label>
            <input type="text" name="name" id="name-field" class="comments__input-field" placeholder="Enter your name" minlength=2/>
            <label for="comment-field" class="comments__input-label">Comment</label>
            <textarea name="comment" id="comment-field" class="comments__input-field" rows="5" placeholder="Add a new comment" minlength=2></textarea>
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
        classesArray: ['comments-form__avatar']
    }

    const { videosArray } = props;
    const videoObject = videosArray[0];
    const videoCommentsArray = videoObject.comments;
    const videoCommentCards = videoCommentsArray.map(commentObject => {
        console.log('comment object', commentObject);
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