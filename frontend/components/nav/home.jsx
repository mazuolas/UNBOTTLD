import React from 'react';
import CheckinIndexContainer from '../checkins/checkin_index_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getAllCheckins();
  }

  render(){
    const user = this.props.user
    return(
      <div className='home-page'>
        <CheckinIndexContainer />
        <div className='side-bar' >
          <div className='stat-box'>
            <div className='top-stat-box'>
              <img className='home-icon' src={user.image_url} />
              <h1 className='home-name'>{user.username}</h1>

            </div>
            <div className='home-stats'>

              <div className='home-stat first'>
                <h3>{user.total_checkins}</h3>
                <h4>Total</h4>
              </div>
              <div className='home-stat'>
                <h3>{user.unique_checkins}</h3>
                <h4>Unique</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
