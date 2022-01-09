import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const DetailsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin: 10px;
`

export const ListItem = styled.li`
  display: flex;
  margin: 15px;
  @media screen and (max-width: 800px) {
    width: 100vw;
    padding: 10px;
  }
`
export const ThumbnailImage = styled.img`
  margin: 10px;
  width: 280px;
  @media screen and (max-width: 800px) {
    width: 35vw;
    height: 80px;
    margin: 5px;
  }
`

export const ProfileImage = styled.img`
  margin: 10px;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 800px) {
    height: 20px;
    width: 25px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
  color: ${props => props.textColor};
  @media screen and (max-width: 800px) {
    font-size: 10px;
    font-weight: 200;
  }
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 300;
  color: ${props => props.textColor};
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
