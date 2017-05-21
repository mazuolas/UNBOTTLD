import React from 'react';
import { Link } from 'react-router-dom';
import DrinkItem from './drink_item';

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
            <DrinkItem key={key} drink={drinks[key]} history={this.props.history}/>
          )
        })}
      </ul>
    );
  }
}

export default DrinkIndex;
