import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.update = this.update.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  update(prop){
    return (e) => {
      e.preventDefault();
      this.setState({ [prop]: e.target.value })
    };
  }

  handleForm(e){
    e.preventDefault();
    this.props.handleForm({user: this.state})
  }

  render(){
    return (
      <div className='session-form-page'>
        <div className='form-background'></div>
        <div className='session-form'>
          <div className='form-icon'></div>
          <h1 className='form-title'>{this.props.formType}</h1>
          <input
            onChange={ this.update('username') }
            value={ this.state.username}
            placeholder='Username'/>
          <input type='password'
            onChange={ this.update('password') }
            value={ this.state.password }
            placeholder='Password'/>
          <button onClick={ this.handleForm }>{ this.props.formType }</button>
        </div>
        <h1 className='errors'>{this.props.errors.join(', ')}</h1>
      </div>
    )
  }
}

export default SessionForm;
