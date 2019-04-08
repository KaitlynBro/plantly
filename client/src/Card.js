
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import logo from '././logo.svg';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      const plantName = document.getElementById('plantName').value;
      console.log('A name was submitted: ' + this.state.value + plantName);
      document.getElementById('plantNameInput').innerHTML = plantName
      event.preventDefault();
    }
    render() {
      return (
        <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', minHeight: '500px', height:'600px' }} /// these are optional style, it is not necessary
        >
        <FrontSide
            style={{
            backgroundColor: 'lightblue',
            }}
        >
            <h3>Plant Name</h3>
            <img src={logo} className='App-logo' alt='logo' style={{maxWidth: '300px', maxHeight:'150px', height:'100%', width:'100%'}}/>
            <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} id="plantName"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </FrontSide>
        <BackSide
            style={{ backgroundColor: 'lightyellow'}}>
            <div>
                <h4 id="plantNameInput"></h4>
            </div>
        </BackSide>
        </Flippy>
      );
    }
  }

export default Form