import React from 'react';
import Upload from 'react-icons/lib/fa/cloud-upload';
import Pic from '../../../resource/images/profile-pic.png';
import cs from './component.pcss';


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileX: '',
      imagePreviewUrl: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.fileX);
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        fileX: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="avatar" className={cs.imgPreview} />);
    } else {
      $imagePreview = (
        <div className="previewText"><img className={cs.img} src={Pic} alt="user" /></div>
      );
    }

    return (
      <div className={cs.imgContainer}>
        <div>
          {$imagePreview}
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className={cs.fileInput}
            type="file"
            onChange={(e) => this.handleImageChange(e)}
          />
          <h3 className={cs.profile}>Change your profile picture
            <span>
              <Upload className={cs.icon} />
            </span>
          </h3>
        </form>
        <button
          className={cs.submitButton}
          type="submit"
          onClick={(e) => this.handleSubmit(e)}
        >Upload Image</button>
      </div>
    );
  }
}

export default ImageUpload;
