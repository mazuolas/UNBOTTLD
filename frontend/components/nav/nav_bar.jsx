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
      <div className='icon nav-icon'></div>
      <NavLink className='index-link nav-link left'
        to='/bottles'>bottles</NavLink>
    </div>

    <div className='right-nav'>
      <NavLink className='index-link nav-link'
        to={`/users/${this.props.user.id}`}>my profile</NavLink>
      <NavLink className='index-link nav-link'
        onClick={ this.logout }
        to={'/'}>logout</NavLink>
    </div>

  </div>
  )
  }
}
export default NavBar;
