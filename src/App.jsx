import { Component } from "react";
import './App.css'
export default class App extends Component
{
  constructor()
  
  {
    super() 
    this.state={count:0}
  }
  increment=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  decrement=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  reset=()=>{
    this.setState({
      count:0
    })
  }
  render()
  {
    return(
<div className="counterApp">
  <h1>Counter App</h1>
  {this.state.count}<br></br>
  <button onClick={this.increment}>+</button>
  <button onClick={this.decrement}>-</button>
  <button onClick={this.reset}>Reset</button>
</div>
    )
  }
}