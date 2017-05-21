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
        <h2>{ checkin.user } uncapped a { checkin.drink } by { checkin.brewery }.</h2>
        <div className='checkin-comment'>
          <h3>{ checkin.comment }</h3>
          <Rating
            className='stars'
            fractions={2}
            step={1}
            readonly={true}
            initialRate={checkin.rating}
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"/>
        </div>
        <img className='checkin-icon' src={checkin.image_url} />
        <h4>{ checkin.time_ago } ago</h4>
      </div>
    )
  }
}
export default CheckinItem;
