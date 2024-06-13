import './Avatar.scss';
import { appendClass } from '../globalFunctions';

function AvatarDiv(props) {
  const {classesArray, avatar} = props;
  const classesString = 'avatar-div' + appendClass(classesArray);
  
  return (
    <>
    <div className={classesString}>
    <img className="avatar-div__img" src={avatar} alt="user avatar"/>
    </div>
    </>
  )
}

export default AvatarDiv;