import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Progressbar from './progressbar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      show: false
    };
  }

  render() {

      var url =
        "https://stackblitz.com/files/react-spinner-sample/github/RahmanM/react-spinner-sample/master/loading.gif";

    return (

      
      <div>
        <Hello name={this.state.name} />
        
        <input type="button" value="SHOW SPINNER" onClick={(e)=> this.showProgress(!this.state.show, e)} />
              
        <Progressbar show={this.state.show} imageUrl={url} height="90" width="90" alignment="middle" alttext="Loading..." />

      </div>
    );
  }

  showProgress = (show, e) => {
    this.setState({show:true});

     setTimeout(()=> {
       this.setState({show:false})
     }, 2000)

      
  }

}

render(<App />, document.getElementById('root'));
