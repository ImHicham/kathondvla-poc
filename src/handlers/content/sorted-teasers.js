const { contentService } = require('../../dependencies')
const { getSixMonthsAgoDate } = require('../../utils')
const { teasersNotInNewslettersFilter } = require('./utils')

module.exports.handler = async (event) => {
    try {
        const data = await contentService.getAllPublishedTeasers({
            issuedAfter: getSixMonthsAgoDate(),
        })

        const result = data.results
            .filter(teasersNotInNewslettersFilter)
            .map((node) => ({
                title: node.$$expanded.title,
                issued: node.$$expanded.issued,
            }))
            .sort((a, b) => {
                return new Date(a.issued) - new Date(b.issued)
            })
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        }
    } catch (error) {
        return {
            statusCode: 500,
            error: error.message,
        }
    }
}
