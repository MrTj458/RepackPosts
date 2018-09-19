import React from 'react'
import {Switch, Route} from 'react-router-dom'
import store from './store'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import FetchPosts from './components/FetchPosts'

const App = () => (
  <Switch store={store}>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={FetchPosts} />
    <Route component={NoMatch} />
  </Switch>
)

export default App