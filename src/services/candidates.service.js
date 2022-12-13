

const getAverage = (note1, note2, note3) => {
    const av = (note1 + note2 + note3) / 3
    return parseFloat(av.toFixed(2))
}

const sortByAvegerage = candidateArray => {
    const sortedArray =  candidateArray.results.sort((a, b) => {
        return b.average - a.average
    })

    return candidateArray.results = sortedArray
}

const getOrderByAverage = async (candidatesArray) => {
    let candidateAvegerage = []
    candidatesArray.map(candidate => {
        const candidateAv = {
            ...candidate._doc,
            average: getAverage(candidate.note1, candidate.note2, candidate.note3)
        }

        candidateAvegerage.push(candidateAv)
        Math.round()
    })
    candidatesArray.results = candidateAvegerage
    return sortByAvegerage(candidatesArray)
}

module.exports = {
    getOrderByAverage
}