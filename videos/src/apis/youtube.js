import axios from 'axios';

const KEY = 'AIzaSyDsqbiPu5F63LCcNbCZ7kyYMUEYPkrlfX8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});