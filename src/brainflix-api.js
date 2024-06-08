import API_KEY from './data/secrets';

export class BrainFlixApi {
  
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
  }
  
  createRequestUrl(endpoint) {
    const requestUrl = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`;
    return requestUrl;
  }
  
  logResponse(response) {
    // Helper method to perform console.log() on API response objects.
    console.log(`API response status ${response.status}: ${response.statusText}.`)
  }
  
  async get(endpoint) {
    /* Helper method for making GET requests (following DRY principle). 
    Called upon by the `.getComments()` and `.getShows()` methods. */
    const requestUrl = this.createRequestUrl(endpoint);
    try {
      const response = await axios.get(requestUrl)
      this.logResponse(response);
      const itemsArray = response.data;
      return itemsArray;
    } catch (error) {
      console.error(`GET request for "${endpoint}" endpoint failed: ${error}`)
      return [];
    }
  }
  
  async getVideo(videoId) {
    const videoObject = await this.get(`videos/${videoId}`);
    return videoObject;
  }
  
  async getVideosArray() {
    const videosArray = await this.get('videos')
    return videosArray;
  }
  
  async postComment(commentObject, videoId) {
    const requestUrl = this.createRequestUrl(`videos/${videoId}`);
    const headers = {'Content-Type': 'application/json'};
    try {
      const response = await axios.post(requestUrl, commentObject, headers)
      this.logResponse(response);
      return response
    } catch (error) {
      console.error(`POST request failed: ${error}`)
      return {}
    }
  }
}

const apiInstance = new BrainFlixApi(API_KEY);
export default apiInstance;