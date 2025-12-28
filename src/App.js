import {Route, Switch, withRouter} from 'react-router-dom'
import {useState} from 'react'
import ThemeContext from './ThemeContext'
import LoginPage from './Components/LoginPage'
import ProtectedRoute from './Components/ProtectedRoute'
import HomePage from './Components/HomePage'
import TrendingPage from './Components/TrendingPage'
import GamingPage from './Components/GamingPage'
import SavedVideosPage from './Components/SavedVideosPage'
import NotFoundPage from './Components/NotFoundPage'
import VideoItemDetailsPage from './Components/VideoItemDetailsPage'

import './App.css'

// Replace your code here
const App = () => {
  const [theme, setTheme] = useState(false)
  const [savedVideosList, setSavedVideosLIst] = useState([])
  // localStorage.setItem('MyVideosList', JSON.stringify(savedVideosList))
  const addOrRemoveVideo = video => {
    setSavedVideosLIst(prevList => {
      const isAlreadySaved = prevList.some(
        savedVideo => savedVideo.id === video.id,
      )
      if (isAlreadySaved) {
        return prevList.filter(savedVideo => savedVideo.id !== video.id) // Remove if already save
      }

      return [...prevList, video] // Add if not already saved
    })
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          darkMode: theme,
          setTheme: () => setTheme(!theme),
          savedVideos: savedVideosList,
          getVideos: addOrRemoveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/trending" component={TrendingPage} />
          <ProtectedRoute exact path="/gaming" component={GamingPage} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosPage}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeContext.Provider>
    </>
  )
}

export default withRouter(App)
