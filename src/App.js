import React from 'react';
import './style.css';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentdidmount () {
    let request = {
      email: this.state.username,
      password: this.state.password
    };

    let headers = {
      accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const axiosInstance = Axios.post(
      'http://13.234.63.48:3001/loginAuth',
      headers,
      request
    ).then(res => {
      console.log(res);
    });
  };

  onchangeuser = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  onchangepass = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  onsubmit = () => {};
  render() {
    return (
      <div>
        <div className="container">
          <input
            type="text"
            name="common username"
            onChange={this.onchangeuser}
            value=""
            placeholder="Enter Username"
          />

          <input
            type="text"
            name="common password"
            value=""
            onChange={this.onchangepass}
            placeholder="Enter Password"
          />
          <input
            type="submit"
            onSubmit={this.onsubmit}
            name="common submitbutton"
            className="submit"
          />
        </div>
      </div>
    );
  }
}

export default App;
