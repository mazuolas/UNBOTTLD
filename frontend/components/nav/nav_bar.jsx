import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
    this.props.getCurrentUser(this.props.user.id);

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
      <Link className='index-link nav-link'
        onClick={ this.logout }
        to={'/'}>logout</Link>
      <img className='profile-icon' src={this.props.user.image_url} />
    </div>

  </nav>
  )
  }
}
export default NavBar;
