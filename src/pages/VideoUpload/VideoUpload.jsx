import './VideoUpload.scss';
import previewImage from '../../assets/images/Upload-video-preview.jpg';
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';

const VideoUpload = () => {

  const inputPropsTitle = {
    id:"title",
    name:"title",
    className:"upload__input-field",
    placeholder:"Add a title to your video",
    type:"input",
    rows:"1"
  }
  const inputPropsDescription = {id:"description",
    name:"description",
    className:"upload__input-field",
    placeholder:"Add a description to your video",
    type:"textarea",
    rows:"4"
  }
  return (
    <section>
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
        {/* <Button 
          className="upload__button--cancel" 
          type="reset" 
        />
        <Button 
          className="upload__button--publish" 
          type="submit"
        /> */}
      </div>
    </section>
  )
}

export default VideoUpload
