
import { hot } from "react-hot-loader/root"
import React, { Component} from "react"
import Title from '../Title'
import createNewTitle from '../../utils/createNewTitle'
import './App.css'

class App extends Component{
  render(){
    return(
      <div className="hello">
        <Title>{createNewTitle()}</Title>
      </div>
    )
  }
}

export default hot(App)