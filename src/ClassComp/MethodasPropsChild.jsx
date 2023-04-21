import React from "react";

class MethodasPropsChild extends React.Component {
  render() {
    return (
      <>
        {/* <button onClick={this.props.greetHandler("ChildProps")}>Click</button> */}
        <button onClick={() => this.props.greetHandler("ChildProps")}>
          Click
        </button>
      </>
    );
  }
}

export default MethodasPropsChild;
