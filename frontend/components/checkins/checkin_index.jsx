import React from 'react';
import CheckinItem from './checkin_item';

class CheckinIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { pos: 10 }
    this.getMoreCheckins = this.getMoreCheckins.bind(this);
  }

  componentWillUnmount(){
    this.props.clearCheckins();
  }

  getMoreCheckins(e){
    e.preventDefault();
    this.setState( { pos: (this.state.pos + 10) } );
    this.props.getCheckins(this.state.pos);
  }

  render(){
    const checkins = this.props.checkins;
    if(!checkins){
      return null;
    }
    let showMore = null;
    if (this.props.total > this.state.pos) {
      showMore = (<button className='show-more'
        onClick={ this.getMoreCheckins }
        >Show More</button>
      )
    }

    return(
      <ul className='checkin-feed'>
        <h1 className='checkin-text'>Recent Checkins</h1>
        {Object.keys(checkins).reverse().map((key) =>{
          if (key === 'all_checkins' || key === 'errors') {
            return
          }
          let checkin = checkins[key]
          return(
            <CheckinItem
              checkin={checkin}
              deleteCheckin={this.props.deleteCheckin}
              deletable={ checkin.user_id == this.props.userId}
              key={key}/>
          )
        })}
        {showMore}
      </ul>
    )
  }
}

export default CheckinIndex;
