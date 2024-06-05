import brainflixLogo from '../../assets/images/BrainFlix-logo.svg'
import FormField from '../FormField/FormField'
import './Header.scss'
import AvatarDiv from '../Avatar/Avatar'
import Button from '../Button/Button'

function Header(props) {
    const avatarProps = props;

    const searchProps = {
        id: "search-input",
        name: "search-input",
        className: "header__search-input",
        placeholder: "Search",
        type: 'input',
        rows: '1'
    }
    const buttonProps = {
        className: "header__upload-button",
        innerText: 'Upload',
        type: 'submit'
    }
    return (
        <>
        <header>
            <section className="header">
                <img src={brainflixLogo} className="header__logo" alt="logo" />
                <div className="header__search-container">
                    <FormField inputProps={searchProps}/>
                    <AvatarDiv avatar={avatarProps}/>
                    <Button buttonProps={buttonProps} />
                </div>
            </section>
        </header>
        </>
    )
}

export default Header