import './Button.scss';

const Button = (props) => {
    const { className, innerText } = props.buttonProps;
    const type = props.buttonProps.type || 'submit';
    return (
        <>
        <button className={className} type={type}>{innerText}</button>
        </>
    )
}

export default Button;