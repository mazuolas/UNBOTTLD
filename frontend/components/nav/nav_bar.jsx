import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render(){
    return(
  <div className='nav-bar'>

    <div className='left-nav'>
      <NavLink className='nav-link'
        to='/breweries'>breweries</NavLink>
    </div>

    <div className='right-nav'>
      <NavLink className='nav-link'
        to={`/users/${this.props.user.id}`}>my profile</NavLink>
      <button onClick={ this.logout }>logout</button>
    </div>

  </div>
  )
  }
}
export default NavBar;
