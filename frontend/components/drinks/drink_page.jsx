import React from 'react';
import { Link } from 'react-router-dom';

class DrinkPage extends React.Component{
  constructor(props){
    super(props);
    this.checkin = this.checkin.bind(this);
  }

  componentWillMount(){
    this.props.getDrink();
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
    return (
      <div className='drink-page'>
        <div className='drink-index-item '>
          <img className='drink-icon' src={drink.image_url} />
          <h1 className='drink-name'>{ drink.name }</h1>
          <h2 className='brewery'>Brewery: { drink.brewery }</h2>
          <button className='check-in' onClick={this.checkin(drink.id)}>Check In</button>
          <Link className='edit-link' to={`/bottles/${drink.id}/edit`}>Edit</Link>
          <div className='beer-details'>
            <h3 className='detail abv'>{ drink.abv } ABV</h3>
            <h3 className='detail checkins'>'TODO' Checkins </h3>
            <h3 className='detail rating'>Average Rating: { drink.average_rating }</h3>
            <h3 className='detail date'>Added {drink.created_at}</h3>
          </div>
        </div>
        <h3 className='drink-description'>{ drink.description }</h3>
        <h1 className='create-text'>Recent Checkins</h1>
        <div className='checkin-feed'>
          <h2 className="feed-item">Feed not built yet :(</h2>
        </div>
      </div>
    )
  }

}

export default DrinkPage;
