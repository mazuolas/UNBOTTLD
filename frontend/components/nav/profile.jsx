import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndexContainer from '../checkins/checkin_index_container';
import UploadButton from '../cloudinary/upload_button';
class Profile extends React.Component {
  constructor(props){
    super(props);
    this.handleImage = this.handleImage.bind(this);
  }

  componentWillMount(){
    this.props.getUser();
    this.props.getUserCheckins();
  }

  componentWillUnmount(){
    this.props.clearUser();
    this.props.clearCheckins();
  }

  handleImage(image){
    this.props.updateUser({
      id: this.props.id,
      image_url: image.url
    });
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
    let editButton = '';
    if (user.id == this.props.currentUserId) {
      editButton = <UploadButton className='profile-button' handleImage={ this.handleImage }/>
    }
    return (
      <div className='user-profile'>
        <div className='profile-top'>
          <div>
            <img className='profile-picture' src={user.image_url} />
            {editButton}
          </div>
          <h1 className='user-name'>{user.username}</h1>
          <div className='profile-stats'>
            
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
