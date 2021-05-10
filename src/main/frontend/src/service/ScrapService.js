import axios from 'axios'

const SCRAP_REST_API_URL='http://localhost:8080/scraplog/scraplist'

class ScrapService {
    getScrapList() {
        return axios.get(SCRAP_REST_API_URL)
    }   
}

export default new ScrapService()