import React, { Component } from 'react';
import { render } from 'react-dom';
import ProgressbarLine from './progressbarline'

export default class Progressbar extends React.Component {

  render() {
    
    if(this.props.show){
      return <ProgressbarLine /> 
    }

    return null;
  }

}
