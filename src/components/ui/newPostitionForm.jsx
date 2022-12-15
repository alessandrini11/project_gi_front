import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
const NewPostitionForm = ({candId}) => {
  const [newPosition, setNewPosition] = useState(null)

  const getAverage = (note1, note2, note3) => {
    const av = (note1 + note2 + note3) / 3
    return parseFloat(av.toFixed(2))
}
  const handleUpdatePosition = (e) => {
    e.preventDefault()
    const data = {
      candId: candId,
      position: parseInt(newPosition)
    }
    console.log(data)
    axios
      .patch(`/candidates/editposition`,data)
      .then(response => {
        console.log(response)
        if(response.status === 200){
          const updatedCandidate = {
            nom: response.data.candidate.nom,
            prenom: response.data.candidate.prenom,
            average: getAverage(response.data.candidate.note1, response.data.candidate.note2, response.data.candidate.note3)
          }
          localStorage.setItem('updatedCandidate', `La moyenne du candidat ${updatedCandidate.nom} ${updatedCandidate.prenom} a été mise à jour a ${updatedCandidate.average}. `)
          window.location.href = "/candidates"
        }
      })
      .catch(error => console.log(error))
  }
  return (
    <form className='w-full bg-none' onSubmit={handleUpdatePosition}>
        <div className="flex space-x-2">
            <input type="hidden" name="id" value={candId} />
            <select name="position" id="" className='w-full' onChange={(e) => setNewPosition(e.target.value)}>
                <option value="">...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type='submit'>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    </form>
  )
}

export default NewPostitionForm