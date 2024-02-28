const getSixMonthsAgoDate = () => {
    let currentDate = new Date()

    currentDate.setMonth(currentDate.getMonth() - 6)

    return currentDate.toISOString()
}

module.exports = {
    getSixMonthsAgoDate,
}
