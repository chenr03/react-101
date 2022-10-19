import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)

     this.state = {

        isClicked: false,
        todos: [],
        text: ''


     }
     // this.handleClick = this.handeClick.bind(this)
  }

    // PRE ES6
  handleClick = () => {
      // console.log('IN CLICK', this)
      // this.setState({
      // isClicked: true

      this.setState({
      isClicked: !this.state.isClicked

  })
  }


  render() {
      console.log('IN RENDER THIS---->', this)
    return (
        <div className="App">
           <h1> {this.state.isClicked === true ? "I have been Clicked" : "I have not been Clicked"}</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
    );
  }
}




export default App;
