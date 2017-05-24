import React from 'react';
import CheckinIndexContainer from '../checkins/checkin_index_container';
import { Link } from 'react-router-dom';

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
    let topDisplay = null;
    if (topDrinks){
      topDisplay= Object.keys(topDrinks).map((key)=> {
        const drink = topDrinks[key];
        return(
          <div key= {key} className='top-drink'>
            <img className='top-drink-icon' src={drink.image_url} />
            <Link className='top-drink-name'
              to={`/bottles/${drink.id}`}>{ drink.name }</Link>
            <h1 className='top-drink-rating'>{drink.average_rating}</h1>
          </div>
        )
      }
      );
    }
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
          <div className='stat-box two'>
            <h1 className='title'>top average rating</h1>
            {topDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
