import React, { Component } from "react";
import { render } from "react-dom";
import ProgressbarLine from "./progressbarline";

export default class Progressbar extends React.Component {
  render() {
    if (this.props.show) {
      var url =
        "https://stackblitz.com/files/react-spinner-sample/github/RahmanM/react-spinner-sample/master/loading.gif";

      return (
        <div>
          <ProgressbarLine imageUrl={url} height="30" width="30" />
          <ProgressbarLine imageUrl={url} height="60" width="60" />
          <ProgressbarLine imageUrl={url} height="90" width="90" alignment="middle" alttext="Loading..." />
        </div>
      );
    }

    return null;
  }
}
