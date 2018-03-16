import React, { Component } from 'react';


class Form extends Component {
state = {
  inputValue: ''

}
  render() {
    return (
<div className='Form'>
  <form onSubmit={(evt)=>this.props.handleSubmit(evt)}>
    <input
      onChange={(evt) => this.props.handleChange(evt)}
    id={this.state.inputValue} />
  </form>
</div>
);
  }
}

export default Form;
