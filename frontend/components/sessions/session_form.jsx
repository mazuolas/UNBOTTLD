import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  update(prop){
    return (e) => {
      this.setState([prop]: e.target.value)
    };
  }

  render(){
    return (
      <div className='session-form'>
        <h1>{this.props.formType}</h1>
        <input
          onChange={this.update('username')}/>
        <input type='password'
          onChange={this.update('password')}/>
      </div>
    )
  }
}

export default SessionForm;
