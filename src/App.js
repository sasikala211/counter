import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
          super()
           this.state={
      count: 0,
      updateVal:0,
      subtract:false,
      add:false

    }
 }
  incrementCount(){
    this.setState({
      count: this.state.count + 1
    })
  }
  decrementCount(){
    this.setState({
      count: this.state.count - 1
    });
  }
  handleChange(e){
   this.setState({
     updateVal:Number(e.target.value)
   })
  }
  handleAdd(){
    this.setState({
      count:this.state.count+this.state.updateVal,
      add:true,
       subtract:false,updateVal:0
    })
  }
  handleSubtract(){
    this.setState({
      count:this.state.count-this.state.updateVal,subtract:true,
       add:false,updateVal:0

    })
  }

  render() {
    return (
      <div className="App">
      <div className="counter">
        counter value<h1>{this.state.count}</h1>
        <button className="btn" onClick={this.incrementCount.bind(this)}>Increment</button>
        <button className="btn" onClick={this.decrementCount.bind(this)}>Decrement</button>
        <input type="number" value={this.state.updateVal} onChange={this.handleChange.bind(this)} className="textBox1"/>
        Add:
        <input type="radio" className="" checked={this.state.add} onClick={this.handleAdd.bind(this)} />
       Subtract:
        <input type="radio" className="" checked={this.state.subtract} onClick={this.handleSubtract.bind(this)} />
      </div>
      </div>
    );
  }
}

export default App;
