import React from 'react';
import CheckinIndexContainer from '../checkins/checkin_index_container';
import { Link } from 'react-router-dom';
import SideBar from './side_bar';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getAllCheckins();
    this.props.getTopDrinks();
  }

  render(){
    const topDrinks = this.props.topDrinks;
    const user = this.props.user;

    return(
      <div className='home-page'>
        <CheckinIndexContainer />
        <SideBar user={ user } topDrinks={ topDrinks }/>
      </div>
    );
  }
}

export default Home;
