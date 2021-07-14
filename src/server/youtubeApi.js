import axios from 'axios';

class Youtube {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3/',
            method: 'get',
            params: {key : process.env.REACT_APP_YOUTUBE_API_KEY}
        })
    }

    async onLode() {
        const response = await this.axios('videos', {
            params : {
                part : 'snippet',
                chart : 'mostPopular',
                maxResults : '5'
            }
        })

        return response.data.items;
    }

    async onSearch(text) {
        const response = await this.axios('search', {
            params: {
                part: 'snippet',
                maxResults: '5',
                q: text,
                type: 'video',
            }
        })

        return response.data.items
    }
}

export default Youtube; 