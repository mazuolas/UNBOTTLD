import React from 'react';
import Rating from 'react-rating';
import UploadButton from '../cloudinary/upload_button';

class CheckinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.user_id,
      drink_id: this.props.drink_id,
      rating: 0,
      comment: '',
    };

    this.checkin = this.checkin.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.update = this.update.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  componentWillMount(){
    this.props.getDrink(this.props.drink_id).then(
      action => {
        this.setState({ image_url: action.drink[this.props.drink_id].image_url }
        );
      }
    );
  }

  update(prop){
    return (e) => {
      e.preventDefault();
      this.setState({ [prop]: e.target.value });
    };
  }

  updateRating(rating){
    this.setState({rating})
  }

  handleImage(image){
    this.setState({ image_url: image.url });
  }

  checkin(e) {
    this.props.createCheckin({checkin: this.state})
  }

  render(){
    return (
      <div className='drink-form'>
        <img className='drink-form-img' src={this.state.image_url} />
        <UploadButton className='upload' handleImage={this.handleImage}/>
        <h3>Rating</h3>
        <Rating
          className='rating'
          onChange={ this.updateRating }
          fractions={2}
          step={1}
          initialRate={this.state.rating}
          empty="fa fa-star-o fa-2x"
          full="fa fa-star fa-2x"/>
        <h3 className='rate-value'>({this.state.rating})</h3>
          <h3>Comment</h3>
          <textarea
            onChange={ this.update('comment') }
            value={ this.state.comment }
            placeholder='Comment'/>
          <button onClick={ this.checkin }>Checkin!</button>
      </div>
    )
  }
}

export default CheckinForm;
