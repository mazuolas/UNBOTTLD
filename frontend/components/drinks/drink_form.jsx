import React from 'react';

class DrinkForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      image_url: '',
      brewery_id: '',
      abv: NaN,
      average_rating: NaN,
    }

    this.update = this.update.bind(this);
    this.handleForm = this.handleForm.bind(this);

  }

  update(prop){
    return (e) => {
      e.preventDefault();
      this.setState({ [prop]: e.target.value });
    };
  }

  handleForm(e){
    e.preventDefault();
    this.props.handleForm({ dtink: this.state });
  }


  render(){

    return (
      <div className='drinkForm'>
        <h1 className='drink-form-title'>{this.props.formType}</h1>
      </div>
    )
  }
}

export default DrinkForm;
