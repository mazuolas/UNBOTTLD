import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndexContainer from '../checkins/checkin_index_container';

class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.getUser();
    this.props.getUserCheckins();
  }
  
  componentWillUnmount(){
    this.props.clearUser();
  }

  render(){
    const user = this.props.user;
    if (!user) {
      return null;
    }
    return (
      <div className='user-profile'>
        <div className='profile-top'>
          <img className='profile-icon' src={user.image_url} />
          <h1>{user.username}</h1>
          <h1>total {user.total_checkins}</h1>
          <h1>unique {user.unique_checkins}</h1>
        </div>
        <CheckinIndexContainer />
      </div>
    )
  }
}

export default Profile;
