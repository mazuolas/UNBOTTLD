import React from 'react';
import { Link } from 'react-router-dom';

class DrinkItem extends React.Component {
  constructor(props){
    super(props);
    this.checkin = this.checkin.bind(this);
  }

  checkin(key) {
    return (e) =>{
      e.preventDefault();
      this.props.history.push(`/bottles/${key}/checkin`)
    }
  }

  render(){
    const drink = this.props.drink
    if (!drink) {
      return null
    }
    let rating;
    if (drink.checkin_count === 0){
      rating = <h3 className='detail rating'>Average Rating: none</h3>
    } else{
      rating = <h3 className='detail rating'>Average Rating: { drink.average_rating }</h3>
    }

    return (
      <div className='drink-index-item '>
        <img className='drink-icon' src={drink.image_url} />
        <Link className='drink-name' to={`/bottles/${drink.id}`}>{ drink.name }</Link>
        <h2 className='brewery'>Brewery: { drink.brewery }</h2>
        <button className='check-in' onClick={this.checkin(drink.id)}>Check In</button>
        <Link className='edit-link' to={`/bottles/${drink.id}/edit`}>Edit</Link>
        <div className='beer-details'>
          <h3 className='detail abv'>{ drink.abv } ABV</h3>
          <h3 className='detail checkins'>{ drink.checkin_count } Checkins </h3>
          {rating}
          <h3 className='detail date'>Added {drink.created_at}</h3>
        </div>
      </div>
    )
  }
}

export default DrinkItem;
