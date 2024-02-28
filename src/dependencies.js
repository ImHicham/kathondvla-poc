const ContentService = require('./services/content.service')
const HttpClient = require('./libs/http.client')
require('dotenv').config()

const httpClient = new HttpClient(process.env.BASE_URL)
const contentService = new ContentService(httpClient)

module.exports = {
    contentService,
}
