import './VideoUpload.scss';
import previewImage from '../../assets/images/Upload-video-preview.jpg';
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';

const VideoUpload = () => {

  const inputPropsTitle = {
    id:"title",
    name:"title",
    className:"upload__input-field",
    label: {
        labelText: 'Title your video',
        inputContainerClassName: 'upload__input-container'
        },
    placeholder:"Add a title to your video",
    type:"input",
    rows:"1"
  }
  const inputPropsDescription = {id:"description",
    name:"description",
    className:"upload__input-field",
    label: {
        labelText: 'Add a video description',
        inputContainerClassName: 'upload__input-container'
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
        <div className="upload__thumbnail-container">
          <label htmlFor="upload-preview">Video Thumbnail</label>
          <img 
            src={previewImage} 
            className="upload__preview"  
            id="upload-preview"
          />
        </div>
        <form className="upload__form">
          <FormField inputProps={inputPropsTitle} />
          <FormField inputProps={inputPropsDescription} />
        </form>
        <div className="upload__buttons-container">
          <Button buttonProps={buttonPropsReset} />
          <Button buttonProps={buttonPropsSubmit} />
        </div>
      </section>
    </main>
  )
}

export default VideoUpload
