import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../ThemeContext'
import SidePanel from '../SidePanel'
import Navbar from '../Navbar'

import {
  HomePageContainer,
  HomeContainer,
  PopupContainer,
  PopupBannerContainer,
  WebLogo,
  CloseButton,
  VideosContainer,
  InputContainer,
  VideosListContainer,
  ListItem,
  VideoThumnail,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelNameDetails,
  ChannelName,
  LikeAndPublish,
  ReactLoader,
  RetryButton,
  FailureHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'API_CALL_IN_PROGRESS',
  success: 'API_CALL_SUCCESS',
  failure: 'API_CALL_FAIL',
}

class HomePage extends Component {
  state = {
    showPopup: true,
    userInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {userInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${userInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok) {
        const updatedData = data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewsCount: each.view_count,
          publishedAt: each.published_at,
        }))
        console.log(updatedData)
        this.setState({
          videosList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (e) {
      console.error('unable to fetch search search results: ', e)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closePopup = () => {
    this.setState({showPopup: false})
  }

  onSearchKeyEnter = e => {
    this.setState({userInput: e.target.value}, this.getAllVideos)
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosListContainer>
        {videosList.map(each => (
          <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
            <ListItem key={each.id}>
              <VideoThumnail src={each.thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <ChannelLogo
                  src={each.channel.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelNameDetails>
                  <ChannelName>{each.title}</ChannelName>
                  <ChannelName>{each.channel.name}</ChannelName>
                  <LikeAndPublish>
                    <ChannelName>{each.viewsCount}</ChannelName>
                    <ChannelName>
                      {formatDistanceToNow(new Date(each.publishedAt))}
                    </ChannelName>
                  </LikeAndPublish>
                </ChannelNameDetails>
              </ChannelDetailsContainer>
            </ListItem>
          </Link>
        ))}
      </VideosListContainer>
    )
  }

  renderLoadingView = () => (
    <ReactLoader className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#263fe0" height="50" width="50" />
    </ReactLoader>
  )

  renderFailureView = () => (
    <ReactLoader>
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <ChannelName>
        We are having some trouble to complete your request.
        <br />
        Please try again
      </ChannelName>
      <RetryButton
        type="button"
        data-testid="retryButton"
        onClick={this.getAllVideos}
      >
        Retry
      </RetryButton>
    </ReactLoader>
  )

  renderHomePage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {showPopup} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <HomePageContainer
              backgroundcolor={darkMode ? '#181818' : '#f9f9f9'}
              color={darkMode ? '#181818' : '#f9f9f9'}
            >
              <SidePanel />
              <HomeContainer>
                <Navbar />
                {showPopup && (
                  <PopupContainer>
                    <PopupBannerContainer>
                      <WebLogo
                        src={
                          darkMode
                            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        }
                      />
                      <CloseButton
                        type="button"
                        onClick={this.closePopup}
                        data-testid="close"
                      >
                        <MdClose />
                      </CloseButton>
                    </PopupBannerContainer>
                  </PopupContainer>
                )}
                <VideosContainer>
                  <InputContainer
                    type="search"
                    placeholder="search"
                    onChange={this.onSearchKeyEnter}
                  />
                  <button
                    data-testid="searchButton"
                    onClick={this.getAllVideos}
                    type="button"
                  >
                    Searched
                  </button>
                  {this.renderHomePage()}
                </VideosContainer>
              </HomeContainer>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(HomePage)
