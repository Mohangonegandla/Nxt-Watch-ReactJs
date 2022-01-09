import VideoItemView from '../VideoItemView'

import VideoContext from '../../context/VideoContext'

import {NavLinksList} from './styledComponents'

const VideoListView = () => (
  <VideoContext.Consumer>
    {value => {
      const {videoList} = value

      return (
        <NavLinksList className="cart-list">
          {videoList.map(eachCartItem => (
            <VideoItemView
              key={eachCartItem.id}
              videoItemDetails={eachCartItem}
            />
          ))}
        </NavLinksList>
      )
    }}
  </VideoContext.Consumer>
)

export default VideoListView
