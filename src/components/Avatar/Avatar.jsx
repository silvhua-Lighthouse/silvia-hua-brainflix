import './Avatar.scss';

function appendClass(classesArray) {
    console.log('appendClass classesArray', classesArray)
    if (typeof classesArray === 'string') {
        classesArray = [classesArray];
    }
    let classesString = '';
    for (let i=0; i < classesArray.length; i++) {
        classesString += ` ${classesArray[i]}`;
    }
    return classesString;
}

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