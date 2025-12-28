import {Link, withRouter} from 'react-router-dom'
import {useContext} from 'react'
import ThemeContext from '../../ThemeContext'
import SidePanel from '../SidePanel'
import Navbar from '../Navbar'
import {
  SavedVideosPageContainer,
  SavedVideosContainer,
  SavedVideosHeading,
  VideosContainer,
  VideosListContainer,
  ListItem,
  VideoThumnail,
  ChannelName,
  NoVideosImage,
} from './styledComponents'

const SavedVideosPage = () => {
  const {savedVideos, darkMode} = useContext(ThemeContext)
  // const myVideos = JSON.parse(localStorage.getItem('MyVideosList'))

  return (
    <SavedVideosPageContainer
      backgroundcolor={darkMode ? '#181818' : '#f9f9f9'}
    >
      <SidePanel />
      <SavedVideosContainer>
        <Navbar />
        {savedVideos.length === 0 ? (
          <VideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <SavedVideosHeading>No Saved Videos Found</SavedVideosHeading>
          </VideosContainer>
        ) : (
          <VideosContainer>
            <SavedVideosHeading>Saved Videos</SavedVideosHeading>
            <VideosListContainer>
              {savedVideos.map(video => (
                <Link to={`/videos/${video.id}`}>
                  <ListItem key={video.id}>
                    <VideoThumnail
                      src={video.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <ChannelName>{video.title}</ChannelName>
                  </ListItem>
                </Link>
              ))}
            </VideosListContainer>
          </VideosContainer>
        )}
      </SavedVideosContainer>
    </SavedVideosPageContainer>
  )
}

export default withRouter(SavedVideosPage)
