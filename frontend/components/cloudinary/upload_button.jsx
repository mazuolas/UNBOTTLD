import React from 'react';

class UploadButton extends React.Component {
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.props.handleImage(results[0]);
      }
    })
  }

  render(){
    return (
      <button className={this.props.className}
        onClick={this.upload}>Upload Image</button>
    )
  }

}

export default UploadButton;
