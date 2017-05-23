import React from 'react';
import Rating from 'react-rating';
import UploadButton from '../cloudinary/upload_button';
import DrinkItem from '../drinks/drink_item';

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
      () => {
        this.props.getCurrentUser(this.props.user_id);
        this.props.getDrink(this.props.drink_id);
      }
    ).then(
      () => this.props.history.push(`/home`)
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

    let rating;
    if (drink.checkin_count === 0){
      rating = <h3 className='detail rating'>Average Rating: none</h3>
    } else{
      rating = <h3 className='detail rating'>Average Rating: { drink.average_rating }</h3>
    }
    return (
      <div className='checkin-page'>
        <DrinkItem drink={drink} />

        <form className='drink-form'>
          {errors}
          <img className='drink-form-img' src={this.state.image_url} />
          <UploadButton className='upload' handleImage={this.handleImage}/>
          <h3>Rating</h3>
          <Rating
            className='stars'
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
        </form>
      </div>
    )
  }
}

export default CheckinForm;
