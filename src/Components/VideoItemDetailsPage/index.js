import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdGetApp} from 'react-icons/md'
import ThemeContext from '../../ThemeContext'
import {
  VideoDetailsPage,
  VideoDetailsContainer,
  VideoContainer,
  RetryButton,
  FailureHeading,
  ChannelName,
  Video,
  VideoItemsContainer,
  FeaturesButton,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelNameDetails,
} from './styledComponents'
import SidePanel from '../SidePanel'
import Navbar from '../Navbar'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'API_CALL_IN_PROGRESS',
  success: 'API_CALL_SUCCESS',
  failure: 'API_CALL_FAIL',
}

const VideoItemDetailsPage = props => {
  const {getVideos, savedVideos} = useContext(ThemeContext)
  const [apiResponse, setApiStatus] = useState({
    apiStatus: apiStatusConstants.initial,
    videoData: '',
    errorMsg: '',
  })
  const isVideoSaved = savedVideos.some(
    video => video.id === apiResponse.videoData.id,
  )
  const onSaveClick = () => {
    getVideos(apiResponse.videoData) // Toggle save/unsave
  }

  const getVideoDetails = async () => {
    setApiStatus(prevResponse => ({
      ...prevResponse,
      apiStatus: apiStatusConstants.inProgress,
    }))
    const {match} = props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
        const updatedData = {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        }
        console.log(updatedData)
        setApiStatus(prevResponse => ({
          ...prevResponse,
          apiStatus: apiStatusConstants.success,
          videoData: updatedData,
        }))
      } else {
        setApiStatus(prevResponse => ({
          ...prevResponse,
          apiStatus: apiStatusConstants.failure,
          errorMsg: data.error_msg,
        }))
      }
    } catch (e) {
      console.error('failed to fetch video details', e)
    }
  }

  useEffect(() => {
    getVideoDetails()
  }, [])

  const renderSuccessView = () => {
    const {videoData} = apiResponse
    return (
      <Video>
        <ReactPlayer
          url={videoData.videoUrl}
          className="sd-video-player"
          width="360px"
          height="300px"
        />
        <ReactPlayer
          url={videoData.videoUrl}
          nwidth="1800px"
          className="md-video-player"
        />
        <ChannelName>{videoData.title}</ChannelName>
        <VideoItemsContainer>
          <ChannelName>{videoData.viewCount}</ChannelName>
          <ChannelName>
            {formatDistanceToNow(new Date(videoData.publishedAt))}
          </ChannelName>
          <FeaturesButton>
            <AiOutlineLike />
            Like
          </FeaturesButton>
          <FeaturesButton>
            <AiOutlineDislike />
            dislike
          </FeaturesButton>
          <FeaturesButton onClick={onSaveClick}>
            <MdGetApp />
            {isVideoSaved ? 'Saved' : 'Save'}
          </FeaturesButton>
        </VideoItemsContainer>
        <hr />
        <ChannelDetailsContainer>
          <ChannelLogo src={videoData.channel.profileImageUrl} />
          <ChannelNameDetails>
            <ChannelName>{videoData.channel.name}</ChannelName>
            <ChannelName>{videoData.channel.subscriberCount}</ChannelName>
            <ChannelName>{videoData.description}</ChannelName>
          </ChannelNameDetails>
        </ChannelDetailsContainer>
      </Video>
    )
  }

  const renderLoadingView = () => (
    <VideoContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#263fe0" height="50" width="50" />
    </VideoContainer>
  )

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return (
      <VideoContainer>
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <ChannelName>{errorMsg}</ChannelName>
        <RetryButton type="button" onClick={() => getVideoDetails()}>
          Retry
        </RetryButton>
      </VideoContainer>
    )
  }

  const renerVideoDetailsPage = () => {
    const {apiStatus} = apiResponse
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <VideoDetailsPage backgroundcolor={darkMode ? '#181818' : '#f9f9f9'}>
            <SidePanel />
            <VideoDetailsContainer>
              <Navbar />
              {renerVideoDetailsPage()}
            </VideoDetailsContainer>
          </VideoDetailsPage>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItemDetailsPage
