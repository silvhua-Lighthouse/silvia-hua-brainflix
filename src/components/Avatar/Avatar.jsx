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


    const classesString = 'avatar-div' + appendClass(props.classesArray);
    
    return (
        <>
        <div className={classesString}></div>
        </>
    )
}


export default AvatarDiv;