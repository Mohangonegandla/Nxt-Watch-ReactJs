import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import VideoContext from './context/VideoContext'

class App extends Component {
  state = {
    videoList: [],
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideoItem = product => {
    const {videoList} = this.state
    const productObject = videoList.find(
      eachCartItem => eachCartItem.id === product.id,
    )
    console.log(productObject)
    if (productObject) {
      this.setState(prevState => ({
        videoList: prevState.videoList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            // const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...videoList, product]
      this.setState({videoList: updatedCartList})
    }
  }

  //   removeCartItem = id => {
  //     const {cartList} = this.state
  //     const updatedList = cartList.filter(eachItem => eachItem.id !== id)
  //     this.setState({cartList: updatedList})
  //   }

  render() {
    const {videoList, isDarkTheme} = this.state
    return (
      <VideoContext.Provider
        value={{
          videoList,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addVideoItem: this.addVideoItem,
          removeVideoItem: this.removeVideoItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
