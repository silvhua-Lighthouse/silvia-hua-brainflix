import axios from "axios";


export class BrainFlixApi {
  
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
  }
  
  createRequestUrl(endpoint) {
    const requestUrl = `${this.baseUrl}/${endpoint}`;
    return requestUrl;
  }
  
  logResponse(response, endpoint, verb) {
    // Helper method to perform console.log() on API response objects.
    // Not invoked when submitted for grading by TAs.
    console.log(`${verb} API response status for "${endpoint}" endpoint: \n${response.status} - ${response.statusText}.`);
    console.log(response);
  }
  
  async get(endpoint) {
    /* Helper method for making GET requests (following DRY principle). 
    Called upon by the `.getVideo()` and `.getVideosArray()` methods. */
    const requestUrl = this.createRequestUrl(endpoint);
    try {
      const response = await axios.get(requestUrl);
      const itemsArray = response.data;
      return itemsArray;
    } catch (error) {
      return false;
    }
  }
  
  async getVideo(videoId) {
    const endpoint = `videos/${videoId}`
    const videoObject = await this.get(endpoint);
    return videoObject;
  }
  
  async getVideosArray() {
    const videosArray = await this.get('videos');
    return videosArray;
  }

  
  async post(endpoint, bodyObject) {
    const requestUrl = this.createRequestUrl(endpoint);
    const headers = {'Content-Type': 'application/json'};
    try {
      const response = await axios.post(requestUrl, bodyObject, headers);
      return response
    } catch (error) {
      return false;
    }
  }
  
  async postVideo(videoObject) {
    const response = await this.post('videos', videoObject);
    return response;
  }
  
  async postComment(commentObject, videoId) {
    const endpoint = `videos/${videoId}/comments`;
    const response = await this.post(endpoint, commentObject);
    return response;
  }
}

const apiInstance = new BrainFlixApi();
export default apiInstance;