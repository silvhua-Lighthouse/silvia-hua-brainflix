import './Button.scss';

const Button = (props) => {
    const { className, innerText } = props.buttonProps;
    const type = props.buttonProps.type || 'submit';
    const form = props.buttonProps.form || ''
    return (
        <>
            <button className={className} type={type} form={form}>{innerText}</button>
        </>
    )
}

export default Button;