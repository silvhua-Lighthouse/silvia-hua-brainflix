import { useState } from 'react';
import './FormField.scss';

function FormField(props) {
    const {id, name, className, placeholder, type, rows, label} = props.inputProps;
    const minlength = props.inputProps.minlength || 1;

    const renderLabel = () => {
        if (label) {
            return (
                <label htmlFor={id}>{label}</label>
            )
        }
    }

    const renderInputElement = () => {
        switch(type) {
            case 'textarea':
                return <textarea id={id} name={name} className={className} placeholder={placeholder} rows={rows} minLength={minlength}></textarea>;
            default:
                return <input id={id} name={name} className={className} placeholder={placeholder} rows={rows} minLength={minlength}></input>
        }
    }

    return (
        <>
        {renderLabel()}
        {renderInputElement()}
        </>
    )

    
}


export default FormField