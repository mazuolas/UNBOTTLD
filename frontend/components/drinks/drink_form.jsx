import React from 'react';
import UploadButton from '../cloudinary/upload_button';

class DrinkForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      description: '',
      image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/e_negate/v1495151026/white_bottle_dglppo.png',
      brewery: '',
      abv: undefined,
      average_rating: -1,
    };

    this.update = this.update.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.deleteDrink = this.deleteDrink.bind(this);
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
    this.props.createBrewery(this.state.brewery).then(
      (response) => (this.setState({brewery_id: response.id}))).then(
        () => (
      this.props.handleForm({ drink: this.state }).then(
        (response) => {
          console.log(response);
          this.props.history.push(`/bottles/${response.id}`);
        }
        )
      )
    )
  }

  handleImage(image){
    this.setState({ image_url: image.url });
  }

  deleteDrink(e){
    e.preventDefault();
    this.props.deleteDrink(this.props.id).then(
      () => this.props.history.push('/bottles')
    )
  }

  render(){
    let deleteButton = "";
    let formType = this.props.formType;
    if (formType === 'edit') {
      deleteButton = <button onClick={ this.deleteDrink }>Delete</button>
      formType = 'Save'
    }
    let errors = this.props.errors;
    if (errors[0]){
      errors = errors.map((error, key)=>(
        <h1 key={key} className='errors'>{error}</h1>
      ))
    }

    return (
      <form className='drink-form'>

        <img className='drink-form-img' src={this.state.image_url} />
        <UploadButton className='upload' handleImage={this.handleImage}/>

        {errors}
        <h3>Bottle Name</h3>
        <input
          onChange={ this.update('name') }
          value={ this.state.name }
          placeholder='Name'/>
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
        <h3>Description</h3>
        <textarea
          onChange={ this.update('description') }
          value={ this.state.description }
          placeholder='Description'/>
        <button onClick={ this.handleForm }>{ formType }</button>
        {deleteButton}
      </form>
    )
  }
}

export default DrinkForm;
