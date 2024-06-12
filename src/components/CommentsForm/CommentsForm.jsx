import FormField from '../FormField/FormField';
import AvatarDiv from '../Avatar/Avatar';
import Button from '../Button/Button';
import './CommentsForm.scss'

const CommentsForm = (props) => {
    const formProps = {
        id: 'user-comment',
        name: 'userComment', 
        className: 'form-field__input--responsive comments-form__input-field',
        placeholder: 'Add a new comment',
        type: 'textarea',
        rows: '4',
        label: {
            labelText: 'Join the conversation',
            inputContainerClassName: 'form-field__container'
            },
        minlength: '2'
    }
    const buttonProps = {
        className: 'comments-form__button',
        innerText: 'Comment',
        type: 'submit'
    }
    return (
        <>
        <div className="comments-form">
            <AvatarDiv avatar={props.avatar}/>
            <form className="comments-form__form">
                <FormField inputProps={formProps} />
                <Button buttonProps={buttonProps} />
            </form>
        </div>
        </>
    )
}

export default CommentsForm;