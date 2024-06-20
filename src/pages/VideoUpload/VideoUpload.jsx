import { useState } from 'react';
import './VideoUpload.scss';
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';
import apiInstance from '../../utils/brainflix-api';
import { useNavigate } from 'react-router-dom';

const VideoUpload = ({ userProps }) => {
  function createImgSrc(folder, filename) {
    const imgSrc = `${import.meta.env.VITE_API_URL}/${folder}/${filename}`;
    return imgSrc
  }

  const imageFolder = 'images'
  const previewImage = 'Upload-video-preview.jpg';

  const [previewImageSrc, setPreviewImage] = useState(createImgSrc(imageFolder, previewImage));
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => { 
    event.preventDefault();

    const newVideoObject = {
      title: event.target.title.value,
      description: event.target.description.value,
      channel: userProps.userName,
      image: `${imageFolder}/custom-upload.jpg`,
    }
    const postVideoResponse = await apiInstance.postVideo(newVideoObject);
    setPreviewImage(createImgSrc('', newVideoObject.image));
    event.target.reset();
    alert('Form submitted.')
    navigate('/');
  }

  const inputPropsTitle = {
    id:"title",
    name:"title",
    className:"form-field__input",
    label: {
        labelText: 'Title your video',
        inputContainerClassName: 'form-field__container'
        },
    placeholder:"Add a title to your video",
    type:"input",
    rows:"1"
  }
  const inputPropsDescription = {id:"description",
    name:"description",
    className:"form-field__textarea",
    label: {
        labelText: 'Add a video description',
        inputContainerClassName: 'form-field__container'
        },
    placeholder:"Add a description to your video",
    type:"textarea",
    rows:"4"
  }
  const buttonPropsReset = {
    className: "upload__button--cancel",
    innerText: "Cancel",
    type: "reset",
    form: "upload-form"
  }
  const buttonPropsSubmit = {
    className: "upload__button--publish",
    innerText: "Publish",
    type: "submit",
    form: "upload-form"
  }
  return (
    <main>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
          <div className="upload__body">
          <div className="upload__thumbnail-container">
            <label className="form-field__label" htmlFor="upload-thumbnail">Video Thumbnail</label>
            <img 
              src={previewImageSrc} 
              className="upload__thumbnail-image"  
              id="upload-thumbnail"
            />
          </div>
          <form onSubmit={handleFormSubmit} className="upload__form" id="upload-form">
            <FormField inputProps={inputPropsTitle} />
            <FormField inputProps={inputPropsDescription} />
          </form>
        </div>
        <div className="upload__buttons-container">
          <Button buttonProps={buttonPropsReset} />
          <Button buttonProps={buttonPropsSubmit} />
        </div>
      </section>
    </main>
  )
}

export default VideoUpload
