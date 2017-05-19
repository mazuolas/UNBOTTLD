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
    this.handleImage = this.handleImage.bind(this);
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

  handleImage(image){
    this.setState({ image_url: image.url })
  }


  render(){
    return (
      <div className='drink-form'>

        <h1 className='drink-form-title'>{this.props.formType} bottle</h1>
        <img className='drink-form-img' src={this.state.image_url} />

        <UploadButton className='upload' handleImage={this.handleImage}/>

        <h3>Bottle Name</h3>
        <input
          onChange={ this.update('name') }
          value={ this.state.name }
          placeholder='Name'/>
        <h3>Description</h3>
        <textarea
          onChange={ this.update('description') }
          value={ this.state.description }
          placeholder='Description'/>
        <h3>Brewery</h3>
        <input
          onChange={ this.update('brewery') }
          value={ this.state.brewery }
          placeholder='Brewery'/>
        <h3>ABV</h3>
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
