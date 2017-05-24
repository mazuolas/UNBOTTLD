import React from 'react';
import { Link } from 'react-router-dom';
import DrinkItem from './drink_item';
import SideBar from '../nav/side_bar';

class DrinkIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getAllDrinks();
    this.props.getTopDrinks();
  }

  render(){
    const drinks = this.props.drinks
    return(
      <div className='home-page'>
        <ul className='drink-index'>
          <li className='create-text'>
            <h2>Can't find a bottle?</h2>
            <Link className='create-link' to='/bottles/create'>Create it!</Link>
          </li>
          {Object.keys(drinks).reverse().map((key) =>{
            if (key === 'errors' || key === 'top') { return }
            return (
              <DrinkItem key={key} drink={drinks[key]} />
            )
          })}
        </ul>
        <SideBar user={ this.props.user } topDrinks={ this.props.topDrinks }/>
      </div>
    );
  }
}

export default DrinkIndex;
