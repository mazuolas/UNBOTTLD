import React from 'react';
import UploadButton from '../cloudinary/upload_button';

class DrinkForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      description: '',
      image_url: '',
      brewery_id: 1,
      average_rating: -1,
    };

    this.update = this.update.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  componentWillMount(){
    if (this.props.formType === 'edit') {
      this.props.editDrink(this.props.id).then(
        action => this.setState(action.drink[this.props.id])
      );
    }
  }

  update(prop){
    return (e) => {
      e.preventDefault();
      this.setState({ [prop]: e.target.value });
    };
  }

  handleForm(e){
    e.preventDefault();
    this.props.handleForm({ drink: this.state }).then(
      () => this.props.history.push('/bottles')
    );
  }


  render(){
    return (
      <div className='drink-form'>

        <h1 className='drink-form-title'>{this.props.formType} bottle</h1>
        <UploadButton />
        <input
          onChange={ this.update('name') }
          value={ this.state.name }
          placeholder='Name'/>
        <textarea
          onChange={ this.update('description') }
          value={ this.state.description }
          placeholder='Description'/>
        <input
          onChange={ this.update('image_url') }
          value={ this.state.image_url }
          placeholder='Image url'/>
        <input
          onChange={ this.update('brewery') }
          value={ this.state.brewery }
          placeholder='Brewery'/>
        <input
          onChange={ this.update('abv') }
          value={ this.state.abv }
          placeholder='ABV'/>
        <button onClick={ this.handleForm }>{ this.props.formType }</button>
      </div>
    )
  }
}

export default DrinkForm;
