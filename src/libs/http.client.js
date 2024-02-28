const fetch = require('node-fetch')

class HTTPClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async fetchData(endpoint, { queryparams, getAllData } = {}, results = []) {
        try {
            let url = `${this.baseUrl}${endpoint}`
            if (queryparams) {
                const params = new URLSearchParams(queryparams)

                url = `${url}?${params.toString()}`
            }

            console.log(`Call to ${url}`)
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()

            const shouldRequestNextResults = getAllData && data.$$meta.next
            if (shouldRequestNextResults) {
                return await this.fetchData(
                    data.$$meta.next,
                    {
                        getAllData,
                    },
                    data.results
                )
            }

            data.results = [...data.results, ...results]
            return data
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`)
        }
    }
}

module.exports = HTTPClient
