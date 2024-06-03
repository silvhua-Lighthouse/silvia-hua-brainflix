import brainflixLogo from '../../assets/images/BrainFlix-logo.svg'
import FormField from '../FormField/FormField'
import './Header.scss'
import AvatarDiv from '../Avatar/Avatar'

const searchProps = {
    className: "header__search-input",
    placeholder: "Search",
    type: 'input'
}

function SearchInput(props) {
    return (
        <>
        <FormField id="search-input" name="search-input" className={searchProps.className} placeholder={searchProps.placeholder} rows="1" type={searchProps.type}/>
        </>
    )
}

function Header() {
    return (
        <>
        <header>
            <section className="header">
                <img src={brainflixLogo} className="header__logo" alt="logo" />
                <div className="header__search-container">
                    <SearchInput/>
                    <AvatarDiv classesArray={"header__avatar"}/>
                    <button className="header__upload-button">Upload</button>
                </div>
            </section>
        </header>
        </>
    )
}

export default Header