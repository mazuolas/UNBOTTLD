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
          <img className='profile-picture' src={user.image_url} />
          <h1 className='user-name'>{user.username}</h1>
          <div className='profile-stats'>
            <div className='user-stats'>
              <h3>Checkins: </h3>
            </div>
            <div className='user-stats'>
              <h3>{user.total_checkins}</h3>
              <h3>Total</h3>
            </div>
            <div className='user-stats'>
              <h3>{user.unique_checkins}</h3>
              <h3>Unique</h3>
            </div>
          </div>
        </div>
        <CheckinIndexContainer />
      </div>
    )
  }
}

export default Profile;
