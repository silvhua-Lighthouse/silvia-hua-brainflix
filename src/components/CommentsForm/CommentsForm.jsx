import './CommentsForm.scss'
import FormField from '../FormField/FormField'
import AvatarDiv from '../Avatar/Avatar'

const CommentsForm = (props) => {
    const formProps = {
        id: 'user-comment',
        name: 'userComment', 
        className: 'comments__input-field',
        placeholder: 'Add a new comment',
        type: 'textarea',
        rows: '4'
    }
    return (
        <>
        <div className="comments__form-container">
            <AvatarDiv avatar={props.avatar}/>
            <form className="comments__form">
                <FormField inputProps={formProps}/>
                <button type="submit" class="button">comment</button>
            </form>
        </div>
        </>
    )
}

export default CommentsForm;