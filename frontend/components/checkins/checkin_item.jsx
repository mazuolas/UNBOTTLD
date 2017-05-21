import React from 'react';
import Rating from 'react-rating';

class CheckinItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const checkin = this.props.checkin;
    return(
      <div className='checkin-index-item'>
        <h2>{ checkin.user }</h2>
        <h2>{ checkin.time_ago }</h2>
        <h2>{ checkin.drink }</h2>
        <h2>{ checkin.brewery }</h2>
        <h2>{ checkin.comment }</h2>
          <Rating
            className='stars'
            fractions={2}
            step={1}
            readonly={true}
            initialRate={checkin.rating}
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"/>
      </div>
    )
  }
}
export default CheckinItem;
