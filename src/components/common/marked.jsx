import React, { Component } from "react";

class Marked extends Component {
  render() {
    let classNames = "fa fa-heart";

    if (!this.props.marked) classNames += "-o";

    return (
      <i
        onClick={this.props.onClick}
        className={classNames}
        aria-hidden="true"
        style={{ color: "pink" }}
      />
    );
  }
}

export default Marked;
