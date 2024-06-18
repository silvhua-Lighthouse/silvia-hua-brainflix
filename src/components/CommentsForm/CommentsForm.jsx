import {useEffect, useState} from 'react';
import FormField from '../FormField/FormField';
import AvatarDiv from '../Avatar/Avatar';
import Button from '../Button/Button';
import './CommentsForm.scss'
import apiInstance from '../../brainflix-api';

const CommentsForm = (props) => {
    const {avatarProps, videoId, videoCommentsArray, newCommentsCount, setNewCommentsCount} = props;
    const {avatarSrc, classesArray} = avatarProps;
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
        type: 'submit',
        form: 'comments-form__form'
    }
    
    const postComment = async (commentObject) => {
        if (commentObject) {
            const postCommentResponse = await apiInstance.postComment(commentObject, videoId);
            setNewCommentsCount(newCommentsCount + 1);
            if (postCommentResponse) {
                const formElement = document.querySelector('.comments-form__form');
                formElement.reset();
            }
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const newCommentValue = event.target.userComment.value;
        const newCommentUsername = 'anonymous';
        const latestComment = videoCommentsArray[0];
        if (newCommentValue === latestComment.comment && newCommentUsername === latestComment.name) {
            setFormErrorState(true)
            alert('Comment has already been submitted.')
        } else {
            const commentObject = {
                name: newCommentUsername,
                comment: newCommentValue
            }
            postComment(commentObject);
            setFormErrorState(false);
        }
    }

    return (
        <>
        <div className="comments-form">
            <AvatarDiv avatar={avatarSrc} classesArray={classesArray}/>
            <form onSubmit={handleFormSubmit} className="comments-form__form" id="comments-form__form">
                <FormField inputProps={formProps} />
                <Button buttonProps={buttonProps} />
            </form>
        </div>
        </>
    )
}

export default CommentsForm;