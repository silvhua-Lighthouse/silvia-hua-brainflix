import { useState } from 'react';
import './FormField.scss';

function FormField(props) {
    const renderInputElement = () => {
        console.log('FormField props', props)
        const {id, name, className, placeholder, type, rows} = props.inputProps;

        switch(type) {
            case 'textarea':
                return <textarea id={id} name={name} className={className} placeholder={placeholder} rows={rows}></textarea>;
            default:
                return <input id={id} name={name} className={className} placeholder={placeholder} rows={rows}></input>
        }
    }

    return (
        <>
        {renderInputElement()}
        </>
    )

    
}


export default FormField