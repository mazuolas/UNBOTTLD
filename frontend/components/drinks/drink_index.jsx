import React from 'react';

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
        {Object.keys(drinks).map((key) =>{
          if (key === 'errors') { return }
          return (
            <li key={ key }>
              <img src={drinks[key].image_url} height='50' width='50'>
              <h1>{ drinks[key].name }<h1/>
              <h2>{ drinks[key].brewery_id }<h2/>
              <p>{ drinks[key].description }</p>
              <h2>{ drinks[key].abv }<h2/>
              <h2>( drinks[key].average_rating)</h2>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default DrinkIndex;
