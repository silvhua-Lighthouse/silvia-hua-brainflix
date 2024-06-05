import './Button.scss';

const Button = (props) => {
    const { className, innerText } = props.buttonProps;
    return (
        <>
        <button className={className}>{innerText}</button>
        </>
    )
}

export default Button;