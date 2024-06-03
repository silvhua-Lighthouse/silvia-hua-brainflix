import { useState } from 'react'

function FormField(props) {
    const renderInputElement = () => {
        switch(props.type) {
            case 'textarea':
                return <textarea id={props.id} name={props.name} className={props.className} placeholder={props.placeholder} rows={props.rows}></textarea>;
            default:
                return <input id={props.id} name={props.name} className={props.className} placeholder={props.placeholder} rows={props.rows}></input>
        }
    }

    return (
        <>
        {renderInputElement()}
        </>
    )

    
}


export default FormField