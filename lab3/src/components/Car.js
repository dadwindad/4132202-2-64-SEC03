import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = 25;
  }
  render() {
    return (
      <p>
        Hello Class {this.state} {this.props.brand}
      </p>
    );
  }
}

export default Car;
