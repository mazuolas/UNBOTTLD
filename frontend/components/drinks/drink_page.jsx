import React from 'react';
import { Link } from 'react-router-dom';

class DrinkPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getDrink();
  }

  render(){
    if (!this.props.drink) {
      return null
    }
    return (
      <div className='drink-index-item '>
        <img className='drink-icon' src={this.props.drink.image_url} />
        <h1 className='drink-name'>{ this.props.drink.name }</h1>
        <h2 className='brewery'>Brewery: { this.props.drink.brewery }</h2>
        <button className='check-in'>Check In</button>
        <Link className='edit-link' to={`/bottles/${this.props.drink.id}/edit`}>Edit</Link>
        <div className='beer-details'>
          <h3 className='detail abv'>{ this.props.drink.abv } ABV</h3>
          <h3 className='detail checkins'>'TODO' Checkins </h3>
          <h3 className='detail rating'>Average Rating: { this.props.drink.average_rating }</h3>
          <h3 className='detail date'>Added {this.props.drink.created_at}</h3>
        </div>
      </div>
    )
  }

}

export default DrinkPage;
