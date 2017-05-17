import { Link } from 'react-router-dom';
import React from 'react';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className='index'>
        <div className='icon'></div>
        <h1 className='page-title'>UNBOTTLD</h1>
        <p className='description'>Find your favorite bottle</p>
        <div className='link-container'>
          <Link className="index-link" to="/signup">sign up</Link>
          <Link className="index-link" to="/login">login</Link>
        </div>
      </div>
    )
  }
}

export default Index;
