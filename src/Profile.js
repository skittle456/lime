import React, { PureComponent, Fragment } from "react";

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imagePreviewUrl: this.props.defaultImage
    };
  }

  _handleName = e => {
    this.props.setName(e.target.value);
  };
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.props.setProfile(reader.result);
      this.setState({
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    const { placeholder } = this.props;

    return (
      <Fragment>
        <div className="previewComponent">
          <div className="imgPreview">
            <img src={imagePreviewUrl} />{" "}
          </div>
          <form>
            <div className="profile-input-outline ">
              <input
                className="fileInput"
                type="file"
                onChange={e => this._handleImageChange(e)}
              />
            </div>
            <div className="profile-input-outline ">
              <input
                className="profile-input"
                type="text"
                placeholder={placeholder}
                onChange={this._handleName}
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
