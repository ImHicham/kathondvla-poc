const { contentService } = require('../../dependencies')
const { getSixMonthsAgoDate } = require('../../utils')
const { teasersNotInNewslettersFilter } = require('./utils')

module.exports.handler = async (event) => {
    try {
        const data = await contentService.getAllPublishedTeasers({
            issuedAfter: getSixMonthsAgoDate(),
            orderBy: 'issued',
        })

        const result = data.results
            .filter(teasersNotInNewslettersFilter)
            .map((node) => ({
                title: node.$$expanded.title,
                issued: node.$$expanded.issued,
            }))
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
