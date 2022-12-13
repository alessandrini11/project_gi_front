import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const NewPostitionForm = ({candId}) => {
  return (
    <form className='w-full bg-none'>
        <div className="flex space-x-2">
            <input type="hidden" name="id" value={candId} />
            <select name="position" id="" className='w-full'>
                <option value="10">1</option>
                <option value="8">2</option>
                <option value="6">3</option>
                <option value="4">4</option>
                <option value="2">5</option>
            </select>
            <button type='submit'>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    </form>
  )
}

export default NewPostitionForm