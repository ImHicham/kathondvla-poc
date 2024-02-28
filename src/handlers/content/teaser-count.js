const { contentService } = require('../../dependencies')
const { getSixMonthsAgoDate } = require('../../utils')
const {
    teasersNotInNewslettersFilter,
    teasersNotOnlyInSchoolsFilter,
} = require('./utils')

module.exports.handler = async (event) => {
    try {
        const data = await contentService.getAllPublishedTeasers({
            issuedAfter: getSixMonthsAgoDate(),
        })

        const filteredTeasers = data.results
            .filter(teasersNotInNewslettersFilter)
            .filter(teasersNotOnlyInSchoolsFilter)

        const result = { count: filteredTeasers.length }
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
