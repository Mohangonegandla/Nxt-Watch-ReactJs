import React from 'react'

const VideoContext = React.createContext({
  videoList: [],
  isDarkTheme: false,
  toggleTheme: () => {},
  addVideoItem: () => {},
  removeVideoItem: () => {},
})

export default VideoContext
