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
        <CheckinIndexContainer />
      </div>
    )
  }
}

export default Profile;
