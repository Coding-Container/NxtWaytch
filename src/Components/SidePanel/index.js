import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {CgDarkMode} from 'react-icons/cg'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeContext from '../../ThemeContext'

import {
  SidePanelContainer,
  SidePanelItemsContainer,
  SidePanelNavContainer,
  SidePanelLinksContainer,
  SidePanelImage,
  Description,
  ContactUsContainer,
  ContactUsLogo,
  ContactDescription,
  ContactHeading,
  NavbarContainer,
  NavbarImage,
  NavbarButton,
  NavItemsLinks,
  Mobile,
  LogoutPopup,
} from './styledComponents'

import './index.css'

const SidePanel = props => {
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
          <SidePanelContainer
            backgroundcolor={darkMode ? '#181818' : '#f9f9f9'}
          >
            <NavbarContainer
              className="col-12 d-block d-md-none fixed-top"
              backgroundcolor={darkMode ? '#181818' : '#f9f9f9'}
            >
              <NavbarImage
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
                className="image"
              />

              <NavbarButton onClick={() => setTheme(!darkMode)} type="button">
                {darkMode ? (
                  <HiOutlineLightBulb
                    className="icon"
                    color={darkMode ? '#f9f9f9' : '#181818'}
                  />
                ) : (
                  <CgDarkMode
                    className="icon"
                    color={darkMode ? '#f9f9f9' : '#181818'}
                  />
                )}
              </NavbarButton>
              <Popup
                modal
                trigger={
                  <NavbarButton type="button">
                    <GiHamburgerMenu
                      className="icon"
                      color={darkMode ? '#f9f9f9' : '#181818'}
                    />
                  </NavbarButton>
                }
              >
                <NavItemsLinks className="d-md-none">
                  <Link to="/" className="links">
                    <AiFillHome className="icon" />
                    <Mobile>Home</Mobile>
                  </Link>
                  <Link to="/trending" className="links">
                    <AiFillHome className="icon" />
                    <Mobile>Trending Videos</Mobile>
                  </Link>
                  <Link to="/gaming" className="links">
                    <AiFillHome className="icon" />
                    <Mobile>Gaming Videos</Mobile>
                  </Link>
                  <Link to="/saved-videos" className="links">
                    <AiFillHome className="icon" />
                    <Mobile>Saved Videos</Mobile>
                  </Link>
                </NavItemsLinks>
              </Popup>

              <Popup
                modal
                trigger={
                  <NavbarButton className="logout-button" type="button">
                    <FiLogOut
                      className="icon"
                      color={darkMode ? '#f9f9f9' : '#181818'}
                    />
                  </NavbarButton>
                }
              >
                {close => (
                  <LogoutPopup>
                    <p className="log-des">Confirm to Logout?</p>
                    <div>
                      <button
                        type="button"
                        onClick={onLogout}
                        className="buttons"
                      >
                        Yes
                      </button>
                      <button
                        className="buttons"
                        type="button"
                        onClick={() => close()}
                        data-testid="close"
                      >
                        No
                      </button>
                    </div>
                  </LogoutPopup>
                )}
              </Popup>
            </NavbarContainer>
            <SidePanelItemsContainer>
              <SidePanelNavContainer>
                <SidePanelImage
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <SidePanelLinksContainer>
                  <Link to="/" className="links">
                    <AiFillHome className="icon" />
                    <Description>Home</Description>
                  </Link>
                  <Link to="/trending" className="links">
                    <AiFillHome className="icon" />
                    <Description>Trending Videos</Description>
                  </Link>
                  <Link to="/gaming" className="links">
                    <AiFillHome className="icon" />
                    <Description>Gaming Videos</Description>
                  </Link>
                  <Link to="/saved-videos" className="links">
                    <AiFillHome className="icon" />
                    <Description>Saved Videos</Description>
                  </Link>
                </SidePanelLinksContainer>
              </SidePanelNavContainer>
            </SidePanelItemsContainer>
            <ContactUsContainer className="d-none d-md-block">
              <ContactHeading>Contact Us</ContactHeading>
              <SidePanelItemsContainer>
                <ContactUsLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactUsLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactUsLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SidePanelItemsContainer>

              <SidePanelItemsContainer>
                <ContactDescription>
                  Enjoy! Now to see your <br />
                  channels and <br />
                  recommendations!
                </ContactDescription>
              </SidePanelItemsContainer>
            </ContactUsContainer>
          </SidePanelContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(SidePanel)
