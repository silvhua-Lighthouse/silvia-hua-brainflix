import { useState } from 'react'

function FormField(props) {
    return (
        <>
        <textarea id={props.id} name={props.name} className={props.className} placeholder={props.placeholder} rows={props.rows}></textarea>
        </>
    )
}


export default FormField