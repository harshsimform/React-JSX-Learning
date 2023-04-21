import React from "react";
import MethodasPropsChild from "./MethodasPropsChild";

class MethodasProps extends React.Component {
  constructor() {
    super();
    this.state = {
      parentName: "Harsh",
    };
    this.greet = this.greet.bind(this);
  }

  greet(childParam) {
    alert(`Hello ${this.state.parentName} and ${childParam}`);
  }
  render() {
    return (
      <>
        {/* passing method as a props  */}
        <MethodasPropsChild greetHandler={this.greet} />
      </>
    );
  }
}

export default MethodasProps;
