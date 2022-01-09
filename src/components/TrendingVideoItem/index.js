import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  ContentSection,
  Heading,
  Desc,
  ColumnAlign,
  RowAlign,
} from './styledComponents'

import VideoContext from '../../context/VideoContext'

// import {Link} from 'react-router-dom'
// import {formatDistanceToNow} from 'date-fns'

const TrendingVideoItem = props => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const {trendingVideos} = props

      const {
        id,
        name,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = trendingVideos

      //   console.log(formatDistanceToNow(new Date(2015, 5, 20)))
      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ContentSection>
              <ColumnAlign>
                <Heading textColor={textColor}>{title}</Heading>
                <Desc textColor={textColor}>{name}</Desc>
                <RowAlign>
                  <Desc textColor={textColor}>{viewCount}</Desc>
                  <Desc textColor={textColor}>{publishedAt}</Desc>
                </RowAlign>
              </ColumnAlign>
            </ContentSection>
          </ListItem>
        </DetailsLink>
      )
    }}
  </VideoContext.Consumer>
)

export default TrendingVideoItem
