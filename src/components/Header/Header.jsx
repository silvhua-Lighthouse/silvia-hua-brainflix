import brainflixLogo from '../../assets/images/BrainFlix-logo.svg'
import FormField from '../FormField/FormField'
import './Header.scss'
import AvatarDiv from '../Avatar/Avatar'

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
    return (
        <>
        <header>
            <section className="header">
                <img src={brainflixLogo} className="header__logo" alt="logo" />
                <div className="header__search-container">
                    <FormField inputProps={searchProps}/>
                    <AvatarDiv avatar={avatarProps}/>
                    <button className="header__upload-button">Upload</button>
                </div>
            </section>
        </header>
        </>
    )
}

export default Header