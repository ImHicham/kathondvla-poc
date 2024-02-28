const teasersNotInNewslettersFilter = (node) =>
    node.$$expanded.$$relationsFrom.length === 0

const teasersNotOnlyInSchoolsFilter = (node) => {
    return (
        node.$$expanded.outypes.includes('SCHOOL') &&
        node.$$expanded.outypes.length > 1
    )
}

module.exports = {
    teasersNotInNewslettersFilter,
    teasersNotOnlyInSchoolsFilter,
}
