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
    this.setGuest = this.setGuest.bind(this);
  }
  componentWillUnmount(){
    this.props.clearErrors();
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

  setGuest(e){
    e.preventDefault();
    this.props.guestLogin();
  }

  render(){
    let errors = this.props.errors;
    if (errors[0]) {
      errors = errors.map((error, key)=>(
        <h1 key={key} className='errors'>{error}</h1>
      ));
    }

    return (
      <div className='session-form-page'>
        <img src='https://res.cloudinary.com/dcslgdwha/image/upload/v1495148244/open_bottles_pkmvwr.jpg' className='background-image'/>
        <form className='session-form'>
          <h1 className='form-title'>UNBOTTLD</h1>
          <h2 className='form-subtitle'>Find Bottles</h2>
          {errors}
          <div className='input-box'>
            <i className="material-icons user-icon">account_circle</i>
            <input
              onChange={ this.update('username') }
              value={ this.state.username}
              placeholder='Username'/>
          </div>
          <div className='input-box'>
            <i className="material-icons lock-icon">lock_outline</i>
            <input type='password'
              onChange={ this.update('password') }
              value={ this.state.password }
              placeholder='Password'/>
          </div>
          <button onClick={ this.handleForm }>{ this.props.formType }</button>
          <button onClick={ this.setGuest }>login as guest</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
