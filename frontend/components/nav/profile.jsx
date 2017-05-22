import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndexContainer from '../checkins/checkin_index_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state ={firstRender: true}
  }

  componentWillMount(){
    this.props.getUser();
    this.props.getUserCheckins();
  }

  componentWillUnmount(){
    this.props.clearUser();
    this.props.clearCheckins();
  }

  render(){
    const user = this.props.user;
    if (!user) {
      return null;
    }
    if (this.props.id != user.id) {
      this.props.getUser();
      this.props.getUserCheckins();
    }
    return (
      <div className='user-profile'>
        <div className='profile-top'>
          <img className='profile-icon' src={user.image_url} />
          <h1>{user.username}</h1>
          <h3 className='user-stats'>Total {user.total_checkins}</h3>
          <h3 className='user-stats'>unique {user.unique_checkins}</h3>
        </div>
        <CheckinIndexContainer />
      </div>
    )
  }
}

export default Profile;
