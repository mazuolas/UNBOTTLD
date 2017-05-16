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
      <div className='session-form'>
        <h1>{this.props.formType}</h1>
        <h1>{this.props.errors.join(', ')}</h1>
        <input
          onChange={ this.update('username') }
          value={ this.state.username}/>
        <input type='password'
          onChange={ this.update('password') }
          value={ this.state.password }/>
        <button onClick={ this.handleForm }>{ this.props.formType }</button>
      </div>
    )
  }
}

export default SessionForm;
