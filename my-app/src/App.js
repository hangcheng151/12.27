import './style.less';
import React, { Component } from 'react'
import Home from './pages/Home'
import Cate from './pages/Cate'
import { Switch,Route,Redirect } from 'react-router-dom'
 class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/cate" render={()=><Cate/>}/>
          <Route path="/home" render={()=><Home/>} />
          <Route path="/" render={()=><Home/>} >
            <Redirect to="/home"/>
          </Route>
        </Switch>
      </div>
    )
  }
}


export default App;
