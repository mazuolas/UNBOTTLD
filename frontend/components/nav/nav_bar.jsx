import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
    this.props.getCurrentUser(this.props.user.id);
    this.searchDrinks = this.searchDrinks.bind(this);
    this.state = { search: '' }
  }


  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  home(e) {
    e.preventDefault();
    this.props.history.push('/home');
  }

  searchDrinks(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
    if (this.props.location != '/bottles') {
      this.props.history.push(`/bottles`);
    }
    this.props.getDrinkSearch(e.target.value)
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
      <div className='input-box search-box'>
          <i className="material-icons user-icon">search</i>
        <input className='search'
          onChange={ this.searchDrinks }
          value={ this.state.search }
          placeholder='Search by name or brewery'/>
      </div>
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
