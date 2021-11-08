import axios from 'axios'

const KEY = 'AIzaSyC0fudWm_sSosVPd6jnDWpdZ08HpfNvr20'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
