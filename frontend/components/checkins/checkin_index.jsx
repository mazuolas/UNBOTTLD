import React from 'react';
import CheckinItem from './checkin_item';

class CheckinIndex extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){
    if (Object.keys(this.props.checkins).length === 1 ) {
      this.props.getCheckins();
    }
  }


  render(){
    const checkins = this.props.checkins;
    if(!checkins){
      return null;
    }
    return(
      <ul className='checkin-feed'>
        <h1 className='checkin-text'>Recent Checkins</h1>
        {Object.keys(checkins).reverse().map((key) =>{
          if (key === 'errors') {
            return
          }
          return(
            <CheckinItem checkin={checkins[key]} key={key}/>
          )
        })}
      </ul>
    )
  }
}

export default CheckinIndex;
