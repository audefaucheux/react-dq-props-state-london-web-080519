import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 0
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  chooseBabyHogImg = () => {
    if(this.props.eyeColor === "blue"){ return <img src={BlueBaby} style={{height: '200px'}} alt="Blue Baby" />}
    if(this.props.eyeColor === "sun"){ return <img src={SunBaby} style={{height: '200px'}} alt="Sun Baby" />}
    if(this.props.eyeColor === "glowing"){ return <img src={GlowingBaby} style={{height: '200px'}} alt="Glowing Baby" />}
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>{this.state.weight}</h3>
        <h3>{this.props.hobby}</h3>
        <h4>{this.props.eyeColor}</h4>
          
        <Button name="+" onClick={this.changeWeight}>
          +
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          -
        </Button>

        <div className="hb-wrap">
          {this.chooseBabyHogImg()}
        </div>
        
      </li>
    )
  }
}
