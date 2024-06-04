import './Comments.scss'
import CommentsForm from '../CommentsForm/CommentsForm';
/* 
<section class="comments">
    <div class="comments__form-container">
        <div class="comments__avatar-div">
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
    <div class="comments__cards-container">
        <!-- DOM elements added here -->
    </div>
</section>
*/
function Comments(props) {
    const { videosArray } = props.videosArray;
    const commentsCardsElements = videosArray.map(videoObject => {

    })
    return (
        <section>
            <CommentsForm />
        </section>
    )
}