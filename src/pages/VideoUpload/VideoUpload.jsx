import './VideoUpload.scss';
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';
import apiInstance from '../../brainflix-api';

const VideoUpload = ({ userProps }) => {
  const previewImage = 'Upload-video-preview.jpg';
  const previewImageSrc = `${import.meta.env.VITE_API_URL}/images/${previewImage}`;

  const handleFormSubmit = async (event) => { 
    event.preventDefault();
    console.log('Form submitted.')
    const newVideoObject = {
      title: event.target.title.value,
      description: event.target.description.value,
      channel: userProps.userName,
      image: '',
      views: '0',
      likes: '0',
      duration: '0:00',
      video: '',
      timestamp: Date.now(),
      comments: []
    }
    const postVideoResponse = await apiInstance.postVideo(newVideoObject);

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
