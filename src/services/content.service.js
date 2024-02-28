const ENDPOINT_RESOURCE = '/content'
const DEFAULT_QUERY_LIMIT = 1000

class ContentService {
    constructor(httpClient) {
        this.client = httpClient
    }

    async getAllPublishedTeasers(params, next) {
        try {
            const queryparams = {
                type: 'TEASER',
                rootPublished: true,
                limit: DEFAULT_QUERY_LIMIT,
                ...params,
            }
            const data = await this.client.fetchData(ENDPOINT_RESOURCE, {
                queryparams,
                getAllData: true,
            })

            return data
        } catch (error) {
            throw new Error(`Content service error: ${error.message}`)
        }
    }
}

module.exports = ContentService
