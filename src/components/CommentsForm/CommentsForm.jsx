import FormField from '../FormField/FormField'
import AvatarDiv from '../Avatar/Avatar'
import Button from '../Button/Button'

const CommentsForm = (props) => {
    const formProps = {
        id: 'user-comment',
        name: 'userComment', 
        className: 'comments__input-field',
        placeholder: 'Add a new comment',
        type: 'textarea',
        rows: '4',
        label: {
            labelText: 'Join the conversation',
            inputContainerClassName: 'comments__input-container'
            },
        minlength: '2'
    }
    const buttonProps = {
        className: 'comments__button',
        innerText: 'Comment',
        type: 'submit'
    }
    return (
        <>
        <div className="comments__form-container">
            <AvatarDiv avatar={props.avatar}/>
            <form className="comments__form">
                <FormField inputProps={formProps} />
                <Button buttonProps={buttonProps} />
            </form>
        </div>
        </>
    )
}

export default CommentsForm;