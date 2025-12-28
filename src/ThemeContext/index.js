import React from 'react'

const ThemeContext = React.createContext({
  darkMode: false,
  setTheme: () => {},
  savedVideos: [],
  getVideos: () => {},
})

export default ThemeContext
