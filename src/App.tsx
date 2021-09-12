import React from 'react'
import Layout from './layout'
import FeedScreen from './screens/Feed'
import MessagesScreen from './screens/Messages'
import { Redirect, Route, Switch } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={FeedScreen} />
        <Route path='/messages' component={MessagesScreen} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  )
}

export default App
