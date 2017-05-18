import { Link } from 'react-router-dom';
import React from 'react';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className='index'>
        <h1 className='page-title'><div className='icon'></div>UNBOTTLD</h1>
        <p className='description'>Find your favorite bottle</p>
        <div className='link-container'>
          <Link className="index-link" to="/signup">sign up</Link>
          <Link className="index-link" to="/login">log in</Link>
        </div>
      </div>
    )
  }
}

export default Index;
