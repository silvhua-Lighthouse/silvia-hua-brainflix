import {useEffect, useState} from 'react';
import FormField from '../FormField/FormField';
import AvatarDiv from '../Avatar/Avatar';
import Button from '../Button/Button';
import './CommentsForm.scss'
import apiInstance from '../../brainflix-api';

const CommentsForm = ({avatar, videoId, videoCommentsArray, setApiResponse}) => {

    const [commentObject, setCommentObject] = useState(null);
    const [formErrorState, setFormErrorState] = useState(false);
    
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
    if (formErrorState) {
        formProps.className += ' form-field--error';
    }

    const buttonProps = {
        className: 'comments-form__button',
        innerText: 'Comment',
        type: 'submit'
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const newCommentValue = event.target.userComment.value;
        if (newCommentValue.length > 1 && newCommentValue !== videoCommentsArray[0].comment) {
            setCommentObject({
                name: 'anonymous',
                comment: newCommentValue
            })
            console.log('New comment object created')
            setFormErrorState(false);
            setApiResponse(true);
        } else {
            setFormErrorState(true)
        }
    }
    const postComment = async (commentObject) => {
        if (commentObject) {
            const postCommentResponse = await apiInstance.postComment(commentObject, videoId);
            
            console.log('postComment request sent');
            // setApiResponse(postCommentResponse);
        }
    }
    const postCommentResponse = postComment(commentObject);

    // useEffect(() => {
    //     postComment();
    // }, [comment]);

    // if (postCommentResponse) {
    // }

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