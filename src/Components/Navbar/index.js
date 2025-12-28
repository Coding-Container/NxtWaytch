import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {CgDarkMode} from 'react-icons/cg'
import {HiOutlineLightBulb} from 'react-icons/hi'
import ThemeContext from '../../ThemeContext'
import {
  NavbarContainer,
  NavIcons,
  NavProfileImage,
  NavLogout,
  PopupContainer,
  PopupDescription,
  PopupPage,
  PopupButtonsContainer,
  PopupButtons,
} from './styledComponents'
import './index.css'

const Navbar = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode, setTheme} = value
        return (
          <NavbarContainer backgroundcolor={darkMode ? '#7e858e' : '#f9f9f9'}>
            <PopupContainer>
              <NavIcons onClick={() => setTheme(!darkMode)}>
                {darkMode ? (
                  <HiOutlineLightBulb className="theme-icon-light" />
                ) : (
                  <CgDarkMode className="theme-icon-dark" />
                )}
              </NavIcons>
              <NavIcons>
                <NavProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavIcons>
              <Popup modal trigger={<NavLogout>Logout</NavLogout>}>
                {close => (
                  <PopupPage>
                    <PopupDescription>
                      Are you sure you want to logout?
                    </PopupDescription>
                    <PopupButtonsContainer>
                      <PopupButtons type="button" onClick={onLogout}>
                        Yes
                      </PopupButtons>
                      <PopupButtons
                        type="button"
                        onClick={() => close()}
                        data-testid="close"
                      >
                        No
                      </PopupButtons>
                    </PopupButtonsContainer>
                  </PopupPage>
                )}
              </Popup>
            </PopupContainer>
          </NavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
