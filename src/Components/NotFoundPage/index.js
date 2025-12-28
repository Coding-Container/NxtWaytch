import {useContext} from 'react'
import ThemeContext from '../../ThemeContext'
import SidePanel from '../SidePanel'
import Navbar from '../Navbar'
import {
  NotFoundPageContainer,
  NotFoundImage,
  NotFoundContainer,
  ChannelName,
  FailureHeading,
} from './styledComponents'

const NotFoundPage = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <NotFoundPageContainer backgroundcolor={darkMode ? '#181818' : 'f9f9f9'}>
      <SidePanel />
      <NotFoundContainer>
        <Navbar />
        <NotFoundImage
          src={
            darkMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          }
          alt="not found"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <ChannelName>
          We cannnot find the page that you are looking for.
        </ChannelName>
      </NotFoundContainer>
    </NotFoundPageContainer>
  )
}

export default NotFoundPage
