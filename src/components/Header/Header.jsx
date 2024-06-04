import brainflixLogo from '../../assets/images/BrainFlix-logo.svg'
import FormField from '../FormField/FormField'
import './Header.scss'
import AvatarDiv from '../Avatar/Avatar'

function Header(props) {
    const {avatar} = props;

    const searchProps = {
        className: "header__search-input",
        placeholder: "Search",
        type: 'input'
    }
    const {className, placeholder, type} = searchProps;
    return (
        <>
        <header>
            <section className="header">
                <img src={brainflixLogo} className="header__logo" alt="logo" />
                <div className="header__search-container">
                    <FormField id="search-input" name="search-input" className={className} placeholder={placeholder} rows="1" type={type}/>
                    <AvatarDiv avatar={avatar}/>
                    <button className="header__upload-button">Upload</button>
                </div>
            </section>
        </header>
        </>
    )
}

export default Header