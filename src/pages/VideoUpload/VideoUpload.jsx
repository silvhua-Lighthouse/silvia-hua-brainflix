import './VideoUpload.scss';
import previewImage from '../../assets/images/Upload-video-preview.jpg';
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';

const VideoUpload = () => {

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
    className:"",
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
    type: "reset" 
  }
  const buttonPropsSubmit = {
    className: "upload__button--publish",
    innerText: "Publish",
    type: "submit"
  }
  return (
    <main>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
          <div className="upload__body">
          <div className="upload__thumbnail-container">
            <label className="form-field__label" htmlFor="upload-thumbnail">Video Thumbnail</label>
            <img 
              src={previewImage} 
              className="upload__thumbnail-image"  
              id="upload-thumbnail"
            />
          </div>
          <form className="form upload__form">
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
