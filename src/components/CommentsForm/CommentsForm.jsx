import {useState} from 'react';
import FormField from '../FormField/FormField';
import AvatarDiv from '../Avatar/Avatar';
import Button from '../Button/Button';
import './CommentsForm.scss'
import apiInstance from '../../brainflix-api';

const CommentsForm = ({avatar, videoId}) => {

    const defaultValues = {
        name: '',
        comment: ''
    }

    const [commentObject, setCommentObject] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setCommentObject({
            name: 'anonymous',
            comment: event.target.userComment.value
        })
    }

    if (commentObject) {
        const postComment = apiInstance.postComment(commentObject, videoId);
        console.log('postComment request sent')
    }
    
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
            <AvatarDiv avatar={avatar}/>
            <form onSubmit={handleFormSubmit} className="comments-form__form">
                <FormField inputProps={formProps} />
                <Button buttonProps={buttonProps} />
            </form>
        </div>
        </>
    )
}

export default CommentsForm;