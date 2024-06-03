import './Avatar.scss';

function appendClass(classesArray) {
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
    const {classesArray, src} = props.avatar;
    const classesString = 'avatar-div' + appendClass(classesArray);
    
    return (
        <>
        <div className={classesString}>
            <img className="avatar-div__img" src={src} alt="user avatar"/>
        </div>
        </>
    )
}


export default AvatarDiv;