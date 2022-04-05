import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


import Home from './pages/Home'
import Tasks from './pages/Tasks'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
