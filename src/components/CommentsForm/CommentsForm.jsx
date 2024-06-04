import './CommentsForm.scss'
import FormField from '../FormField/FormField'
import AvatarDiv from '../Avatar/Avatar'

const CommentsForm = (props) => {
    // const { classesArray, AvatarSrc } = props.avatar;
    return (
        <div className="comments__form-container">
            <AvatarDiv avatar={props}/>

        </div>
    )
}

export default CommentsForm;