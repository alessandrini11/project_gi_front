import React from 'react'
const NewPostitionForm = ({candId}) => {
  return (
    <form className='w-full bg-white'>
        <div className="flex justify-between">
            <input type="hidden" name="id" value={candId} />
            <select name="position" id="" className='w-full'>
                <option value="10">1</option>
                <option value="8">2</option>
                <option value="6">3</option>
                <option value="4">4</option>
                <option value="2">5</option>
            </select>
            <button type='submit'>go</button>
        </div>
    </form>
  )
}

export default NewPostitionForm