import React from 'react';
import CheckinItem from './checkin_item';

class CheckinIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { pos: 0 }
    this.getMoreCheckins = this.getMoreCheckins.bind(this);
  }

  componentWillUnmount(){
    this.props.clearCheckins();
  }

  getMoreCheckins(e){
    e.preventDefault();
    this.setState( { pos: (this.state.pos + 10) } );
    this.props.getCheckins(this.state.pos+10);
  }

  render(){
    const checkins = this.props.checkins;
    if(!checkins){
      return null;
    }

    return(
      <ul className='checkin-feed'>
        <h1 className='checkin-text'>Recent Checkins</h1>
        {Object.keys(checkins).reverse().map((key) =>{
          if (key === 'errors') {
            return
          }
          return(
            <CheckinItem checkin={checkins[key]} key={key}/>
          )
        })}
        <button className='show-more'
          onClick={ this.getMoreCheckins }
          >Show More</button>
      </ul>
    )
  }
}

export default CheckinIndex;
