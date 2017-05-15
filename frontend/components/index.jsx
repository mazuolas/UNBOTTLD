import { Link } from 'react-router-dom';
import React from 'react';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className='index'>
        <h1>UNBOTTLD</h1>
        <p>Find your favorite bottle</p>
        <Link className="nav-link" to="/signup">sign up</Link>
        <Link className="nav-link" to="/login">login</Link>
      </div>
    )
  }
}

export default Index;
