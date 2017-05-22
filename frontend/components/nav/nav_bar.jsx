import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
  }


  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  home(e) {
    e.preventDefault();
    this.props.history.push('/home');
  }

  render(){
    this.props.getCurrentUser(this.props.user.id);

    return(
  <nav className='nav-bar'>

    <div className='left-nav'>
      <img className='nav-icon'
        onClick={ this.home }
        src='http://res.cloudinary.com/dcslgdwha/image/upload/v1495151026/white_bottle_dglppo.png'/>
      <NavLink className='index-link nav-link left'
        to='/bottles'>bottles</NavLink>
    </div>

    <div className='right-nav'>
      <NavLink className='index-link nav-link'
        to={`/users/${this.props.user.id}`}>{this.props.user.username}</NavLink>
      <NavLink className='index-link nav-link'
        onClick={ this.logout }
        to={'/'}>logout</NavLink>
      <img className='profile-icon' src={this.props.user.image_url} />
    </div>

  </nav>
  )
  }
}
export default NavBar;
