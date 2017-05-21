import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndexContainer from '../checkins/checkin_index_container';
import DrinkItem from './drink_item';

class DrinkPage extends React.Component{
  constructor(props){
    super(props);
    this.getDrinkCheckins = this.props.getDrinkCheckins.bind(this)
  }

  componentWillMount(){
    if(!this.props.drink){
      this.props.getDrink();
    }
    this.getDrinkCheckins();
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
        <DrinkItem drink={drink} />
        <h3 className='drink-description'>{ drink.description }</h3>
        <CheckinIndexContainer />
      </div>
    )
  }

}

export default DrinkPage;
