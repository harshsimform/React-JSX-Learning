import React from "react";

class EventBinding extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "harsh",
    };

    // Approach 3
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "Bye",
    });
    // console.log(this);
  }

  //   Approach 4
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Bye",
  //     });
  //   };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        {/* Problem  */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* Approach 1  */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach 2  */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Approach 3 */}
        <button onClick={this.clickHandler}>Click</button>
        {/* Approach 4 */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </>
    );
  }
}

export default EventBinding;
