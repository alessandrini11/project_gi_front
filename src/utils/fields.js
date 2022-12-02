const candidateFields = [
    "nom",
    "prenom",
    "lieu_nais",
    "sexe",
    "nationalite",
    "cursus",
    "niveau",
    "note1",
    "note2",
    "note3",
]

const fakeCandididate = {
    "nom": "schuame",
    "prenom": "alexandre lionel",
    "lieu_nais": "yaoundé",
    "sexe": "Masculin",
    "nationalite": "camerounaise",
    "cursus": "ingenieur",
    "niveau": 3,
    "note1": 8,
    "note2": 7,
    "note3": 8,
    "moyenne": 7.5
}

const fakeCandidateArray = []
for (let index = 0; index < 1000; index++) {
    fakeCandidateArray.push(fakeCandididate) 
}
module.exports = {
    candidateFields,
    fakeCandidateArray
}