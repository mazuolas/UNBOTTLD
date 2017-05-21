import React from 'react';
import Rating from 'react-rating';
import UploadButton from '../cloudinary/upload_button';

class CheckinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.user_id,
      drink_id: this.props.drink_id,
      rating: -1,
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
    this.props.createCheckin({checkin: this.state}).then(
      (response) => this.props.history.push(`/checkins/${response.id}`)
    )
  }

  render(){
    const drink = this.props.drink;
    if (!drink) {
      return null
    }
    let errors = this.props.errors;
    if (errors[0]){
      errors = errors.map((error, key)=>(
        <h1 key={key} className='errors'>{error}</h1>
      ))
    }
    let rateValue = ''
    if (this.state.rating > 0) {
      rateValue = <h3 className='rate-value'>({this.state.rating})</h3>
    }
    return (
      <div className='checkin-page'>
        <div className='drink-index-item '>
          <img className='drink-icon' src={drink.image_url} />
          <h1 className='drink-name'>{ drink.name }</h1>
          <h2 className='brewery'>Brewery: { drink.brewery }</h2>
          <div className='beer-details'>
            <h3 className='detail abv'>{ drink.abv } ABV</h3>
            <h3 className='detail checkins'>'TODO' Checkins </h3>
            <h3 className='detail rating'>Average Rating: { drink.average_rating }</h3>
            <h3 className='detail date'>Added {drink.created_at}</h3>
          </div>
        </div>

        <div className='drink-form'>
          {errors}
          <img className='drink-form-img' src={this.state.image_url} />
          <UploadButton className='upload' handleImage={this.handleImage}/>
          <h3>Rating</h3>
          <Rating
            className='stars'
            placeholderRate={-1}
            onChange={ this.updateRating }
            fractions={2}
            step={1}
            initialRate={this.state.rating}
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"/>
          {rateValue}
          <h3>Comment</h3>
          <textarea
            onChange={ this.update('comment') }
            value={ this.state.comment }
            placeholder='Comment'/>
          <button onClick={ this.checkin }>Checkin!</button>
        </div>
      </div>
    )
  }
}

export default CheckinForm;
