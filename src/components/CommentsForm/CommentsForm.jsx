import './CommentsForm.scss'
import FormField from '../FormField/FormField'
import AvatarDiv from '../Avatar/Avatar'

const CommentsForm = (props) => {
    const { classesArray, src } = props.avatar;
    return (
        <div className="comments__form-container">
            <Avatar avatar={}/>

        </div>
    )
}

export default CommentsForm;