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

    return(
      <div className='home-page'>
        <CheckinIndexContainer />
      </div>
    );
  }
}

export default Home;
