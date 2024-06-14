import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import FormField from '../FormField/FormField';
import './Header.scss';
import AvatarDiv from '../Avatar/Avatar';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Header(props) {
  const {userProps, classesArray} = props;
  
  const searchProps = {
    id: "search-input",
    name: "search-input",
    className: "header__search-input form-field__input",
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
    <header className="header-section">
      <nav className="header">
        <Link to="/"  className="header__logo">
          <img className="logo" src={brainflixLogo} alt="logo" />
        </Link>
        <div className="header__nav-container">
          <FormField inputProps={searchProps}/>
          <AvatarDiv avatar={userProps.avatarSrc} classesArray={classesArray}/>
          <Link to="/upload" className="header__upload-link">
            <Button buttonProps={buttonProps} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header