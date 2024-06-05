import './Avatar.scss';
import { appendClass } from '../globalFunctions';

function AvatarDiv(props) {
    const {classesArray, avatarSrc} = props.avatar;
    const classesString = 'avatar-div' + appendClass(classesArray);
    
    return (
        <>
        <div className={classesString}>
            <img className="avatar-div__img" src={avatarSrc} alt="user avatar"/>
        </div>
        </>
    )
}


export default AvatarDiv;