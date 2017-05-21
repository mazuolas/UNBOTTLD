import React from 'react';
import Rating from 'react-rating';

class CheckinItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props);
    const checkin = this.props.checkin;
    return(
      <div className='checkin'>
        <h2>{ checkin.user.username }</h2>
        <h2>{ checkin.drink.name }</h2>
        <h2>{ checkin.drink.brewery }</h2>
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
