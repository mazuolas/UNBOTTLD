import { Link } from 'react-router-dom';
import React from 'react';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className='index'>
        <img src='http://res.cloudinary.com/dcslgdwha/image/upload/c_scale,q_80,w_2000/v1495148251/bottles_d4suts.jpg' className='background-image'/>
        <h1 className='page-title'><img className='icon' src='http://res.cloudinary.com/dcslgdwha/image/upload/v1495151026/white_bottle_dglppo.png'/>UNBOTTLD</h1>
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
