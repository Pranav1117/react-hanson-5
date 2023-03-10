import {  PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      age: 22,
      name: "Harry",
    };
  }

  handleChangeName = () => {
   
    this.setState({ name: "John",age:34 });
  };

  render() {
    
    return (
      <div>
        <h1 style={{color:'brown'}}>Pure Component</h1>
        <h2>Name: {this.state.name}</h2>
        <h3>Age: {this.state.age}</h3>
        <button onClick={this.handleChangeName}>Change </button>
      </div>
    );
  }
}

export default PureComp;