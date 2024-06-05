import { useState } from 'react';
import './FormField.scss';

function FormField(props) {
    const {id, name, className, placeholder, type, rows} = props.inputProps;
    const minlength = props.inputProps.minlength ?? 1;
    const labelText = props.inputProps.label?.labelText;
    const inputContainerClassName = props.inputProps.label?.inputContainerClassName;

    const renderLabel = () => {
        if (labelText) {
            return (
                <label htmlFor={id}>{labelText}</label>
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

    if (inputContainerClassName) {
        return (
            <div className={inputContainerClassName}>
                {renderLabel()}
                {renderInputElement()}
            </div>
        )
    }

    return (
        <>
        {renderLabel()}
        {renderInputElement()}
        </>
    )

    
}


export default FormField