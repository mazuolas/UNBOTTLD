import React from 'react';
import { Link } from 'react-router-dom';

class DrinkIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getAllDrinks();
  }

  render(){
    const drinks = this.props.drinks
    return(
      <ul className='drink-index'>
        <li className='create-text'>
          <h2>Can't find a bottle?</h2>
          <Link className='create-link' to='/bottles/create'>Create it!</Link>
        </li>
        {Object.keys(drinks).map((key) =>{
          if (key === 'errors') { return }
          return (
            <li className='drink-index-item' key={ key }>
              <img className='drink-icon' src={drinks[key].image_url} />
              <h1 className='drink-name'>{ drinks[key].name }</h1>
              <h2 className='brewery'>Brewery: { drinks[key].brewery }</h2>
              <button className='check-in'>Check In</button>
              <Link className='edit-link' to={`/bottles/${key}/edit`}>Edit</Link>
              <div className='beer-details'>
                <h3 className='detail abv'>{ drinks[key].abv } ABV</h3>
                <h3 className='detail checkins'>'TODO' Checkins </h3>
                <h3 className='detail rating'>Average Rating: { drinks[key].average_rating }</h3>
                <h3 className='detail date'>Added "adddate"</h3>
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default DrinkIndex;
