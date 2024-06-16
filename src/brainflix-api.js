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
    console.log(`${verb} API response status for "${endpoint}" endpoint: \n${response.status} - ${response.statusText}.`);
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
      console.error(`GET request for "${endpoint}" endpoint failed: ${error}`)
      return false;
    }
  }
  
  async getVideo(videoId) {
    const endpoint = `videos/${videoId}`
    const videoObject = await this.get(endpoint);
    return videoObject;
  }
  
  async getVideosArray() {
    const videosArray = await this.get('videos')
    return videosArray;
  }

  
  async post(endpoint, bodyObject) {
    const requestUrl = this.createRequestUrl(endpoint);
    const headers = {'Content-Type': 'application/json'};
    try {
      const response = await axios.post(requestUrl, bodyObject, headers);
      return response
    } catch (error) {
      console.error(`POST request failed: ${error}`);
      return false;
    }
  }
  
  async postVideo(videoObject) {
    const response = await this.post('videos', videoObject);
  }
  
  async postComment(commentObject, videoId) {
    const endpoint = `videos/${videoId}/comments`;
    const response = await this.post(endpoint, commentObject);
    console.log('POST comment response:', response);
  }
  
  // async postVideo(videoObject) {
  //   const endpoint = `videos`;
  //   const requestUrl = this.createRequestUrl('videos');
  //   const headers = {'Content-Type': 'application/json'};
  //   try {
  //     const response = await axios.post(requestUrl, videoObject, headers);
  //     return response
  //   } catch (error) {
  //     console.error(`POST request failed: ${error}`);
  //     return false;
  //   }
  // }
  
  // async postComment(commentObject, videoId) {
  //   const endpoint = `videos/${videoId}/comments`;
  //   const requestUrl = this.createRequestUrl(endpoint);
  //   const headers = {'Content-Type': 'application/json'};
  //   try {
  //     const response = await axios.post(requestUrl, commentObject, headers);
  //     return response
  //   } catch (error) {
  //     console.error(`POST request failed: ${error}`);
  //     return false;
  //   }
}

const apiInstance = new BrainFlixApi();
export default apiInstance;