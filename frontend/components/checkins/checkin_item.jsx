import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

class CheckinItem extends React.Component {
  constructor(props){
    super(props);
  }

  deleteCheckin(){
    this.props.deleteCheckin(this.props.checkin.id)
  }
  render(){
    const checkin = this.props.checkin;
    let checkinImage = null;
    if (checkin.drink_image !== checkin.image_url) {
      checkinImage = <img className='checkin-image' src={checkin.image_url} />
    }
    let deleteButton = null
    if (this.props.deletable) {
      deleteButton = (
        <button onClick={this.deleteCheckin.bind(this)}
          className='delete-checkin'
          >Delete Checkin</button>
      )
    }

    return(
      <div className='checkin-index-item'>
        <h2><Link className='checkin-link' to={`/users/${checkin.user_id}`}>{ checkin.user }</Link>
           {' unbottled a '}
           <Link className='checkin-link' to={`/bottles/${checkin.drink_id}`}>{ checkin.drink }</Link>
             {' by'} { checkin.brewery }.</h2>
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
        {deleteButton}
        {checkinImage}
        <img className='checkin-icon' src={checkin.drink_image} />
        <h4>{ checkin.time_ago } ago</h4>
      </div>
    )
  }
}
export default CheckinItem;
