import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'


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
    const pathname = this.props.location.pathname;

    //name is not a link on show page or chekin form
    let drinkName;
    if (pathname === `/bottles/${drink.id}` || pathname === `/bottles/${drink.id}/checkin` ) {
      drinkName = <h1 className='drink-name' to={`/bottles/${drink.id}`}>{ drink.name }</h1>
    } else {
      drinkName = <Link className='drink-name' to={`/bottles/${drink.id}`}>{ drink.name }</Link>
    }
    //dont show checkin and edit buttons on checkin form
    let buttons = null;
    if (pathname !== `/bottles/${drink.id}/checkin`){
      buttons = [
        <button className='check-in' key={1} onClick={this.checkin(drink.id)}>Check In</button>,
        <Link className='edit-link' key={2} to={`/bottles/${drink.id}/edit`}>Edit</Link>
      ]
    }

    return (
      <div className='drink-index-item '>
        <img className='drink-icon' src={drink.image_url} />
        {drinkName}
        <h2 className='brewery'>Brewery: { drink.brewery }</h2>
        {buttons}
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

export default withRouter(DrinkItem);
