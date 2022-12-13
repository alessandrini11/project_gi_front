import React from 'react'
import { useState, useEffect } from 'react'
import NewPostitionForm from './NewPostitionForm'
const Table = ({fields, list, currentPage, isSearch}) => {
  const [paginationElements, setPaginationElements] = useState([])
  const [newPosition, setNewPosition] = useState(null)
  
  useEffect(() => {
    const elements = []
    for (let index = 0; index < 40; index++) {
      elements.push(
        <li key={index}>
          <a href={`?page=${index + 1}`} 
             className={` ${index + 1 === currentPage ? 'bg-blue-500': 'border'} py-1 px-2 rounded`}>
            {index + 1}
          </a>
        </li>
      )
    }
    setPaginationElements(elements)
  }, [])

  const handleUpdatePosition = (e) => {
    e.preventDefault()

  }
  return (
    <div className="">
      <div className="shadow-md rounded overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-3 text-center"></th>
            <th className="py-3 px-4 text-center">position</th>
              {fields
                .map((field, key) => (
                  <th key={key} className="py-3 px-3 text-center">{field}</th>
                ))}
              <th className="py-3 px-3 text-center">moyenne</th>
              {/* <th className="py-3 px-3 text-center">actions</th> */}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            { 
              list.length === 0 ? 
                <tr className="text-xl">
                  <td>
                  No candidates found
                  </td>
                </tr>:
                list
                  .map( (item, key) =>(
                <tr key={key} className={`border-b border-gray-200 ${key % 2 === 0 ? 'bg-gray-50': ''} hover:bg-gray-100 text-sm`}>
                  <td className="py-3 px-1 text-center">
                      <NewPostitionForm candId={item._id}/>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.position}</span>
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.nom}</span>
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.prenom}</span>
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.lieu_nais}</span>
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.sexe}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.nationalite}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.cursus}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.niveau}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.note1}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.note2}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.note3}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center justify-center">
                      <span className="">{item.average}</span>
                    </div>
                  </td>
                  {/* <td className="py-3 px-3 text-center">
                    <div className="flex item-center justify-center">
                      <span href="" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"                                >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                      </span>
                      <span className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                      </span>
                      <div className="">
                          <span href="" className="mr-2 transform hover:text-purple-500 hover:scale-110 ">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </span>
                      </div>
                    </div>
                  </td> */}
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`px-5 overflow-x-scroll ${isSearch ? 'hidden': 'block'}`} >
        <ul className="flex space-x-1 py-3">
          {paginationElements.map(item => item)}
        </ul>
      </div>
    </div>
  )
}

export default Table