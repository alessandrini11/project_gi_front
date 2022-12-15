import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faTrash, faFileExport, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/parts/Navbar'
import Table from '../components/ui/Table'
import fields from '../utils/fields'
import axios from 'axios'

const Home = () => {
  const [candidates, setCandidates] = useState([])
  const [updatedCandidate, setUpdatedCandidate] = useState("")
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 0,
    totalPages: 0
  })
  const [query, setQuery] = useState("")
  let [searchParams, setSearchParams] = useSearchParams();
  let page = parseInt(searchParams.get("page")) || 1
  
  const [isSearch, setIsSearch] = useState(false)

  const  getAllCandidates = (page) => {
    axios
      .get(`/candidates?page=${page}`)
      .then(response => {
        if(response.status === 200){
          setCandidates(response.data.results)
          setPaginationInfo({
            currentPage: response.data.currentPage,
            totalPages: response.data.totalPages
          })
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if(localStorage.getItem('updatedCandidate')){
      setUpdatedCandidate(localStorage.getItem('updatedCandidate'))
    }
    getAllCandidates(page)
    return () => {
      localStorage.removeItem('updatedCandidate')
    }
  },[page])
  
  const handleDeleteData = () => {
    const isDeleted = window.confirm("Do you want to delete all data ?")
    if(isDeleted){
      axios
        .delete("/candidates/deleteall")
        .then(response => {
          if(response.status === 200){
            alert("All data have been deleted")
            window.location.href = "/candidates"
          }
        })
        .catch(error => console.log(error))
    }

  }
  const handleSearch = (e) => {
    e.preventDefault()
    setCandidates([])
    setIsSearch(true)
    if(query !== ""){
      axios
      .get(`/candidates/search?searchQuery=${query}`)
      .then(response => {
        setCandidates(response.data.results)
        setPaginationInfo({
          currentPage: response.data.currentPage,
          totalPages: response.data.totalPages
        })
      })
      .catch(error => console.log(error))
    } else {
      setIsSearch(false)
      getAllCandidates(1)
    }
    
  }
  const isLoadingData = candidates ? 
    <div className="">
      <Table isSearch={isSearch} paginationInfo={paginationInfo} currentPage={page} fields={fields.candidateFields} list={candidates}></Table>
    </div> : 
    <div className="flex justify-center mt-20" role="status">
        <svg aria-hidden="true" className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-100 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>

  return (
    <div>
        <Navbar></Navbar>
        <section className="my-5">
            <div className="w-10/12 mx-auto">
                <div className="flex justify-between">
                    <div className="border rounded flex-[2]">
                        <form action="" onSubmit={handleSearch}>
                          <div className="flex">
                            <input placeholder="Recherche" type="text" className='h-full focus:outline-none py-2 px-4 flex-1' onChange={ e => setQuery(e.target.value)} />
                            <button className="py-2 px-5 hover:cursor-pointer">
                              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </button>
                          </div>
                        </form>
                    </div>
                    <div className="space-x-5 flex-[1] flex justify-end">
                        <button onClick={handleDeleteData} title="Delete data" className='bg-red-500 rounded py-2 px-4 text-white uppercase hover:bg-red-800'><FontAwesomeIcon icon={faTrash}/></button>
                        <button title="Export data" className='bg-yellow-500 rounded py-2 px-4 text-white uppercase hover:bg-yellow-800'><FontAwesomeIcon icon={faFileExport}/></button>
                        <Link title="Upload data" to="/uploadfile" className="bg-green-500 rounded py-2 px-4 text-white uppercase hover:bg-green-800"><FontAwesomeIcon icon={faFileImport}/></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="my-5">
          <div className="w-10/12 mx-auto">
            {
              updatedCandidate !== "" ? 
              <div className="my-2 bg-green-300 text-green-800">
                <p className="py-3 text-center">{updatedCandidate}</p>
              </div> :
              null
            }
            
            <div className="">
                {isLoadingData}
            </div>
          </div>
        </section>
      </div>
  )
}
// class Home extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       candidates: [],
//       fields: [],
//       query: ""
//     }
//   }
//   componentDidMount(){
//     this.setState({
//       candidates: fields.fakeCandidateArray,
//       fields: fields.candidateFields
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Navbar></Navbar>
//         <section className="my-5">
//             <div className="w-10/12 mx-auto">
//                 <div className="flex justify-between">
//                     <div className="border rounded flex-[2]">
//                         <input type="search" className='h-full focus:outline-none py-2 px-4 w-full' onChange={ e => this.setState({query: e.target.value})} />
//                     </div>
//                     <div className="space-x-5 flex-[1] flex justify-end">
//                         <button className='bg-red-500 rounded py-2 px-4 text-white uppercase hover:bg-red-800'>clear table</button>
//                         <Link to="/uploadfile" className="bg-green-500 rounded py-2 px-4 text-white uppercase hover:bg-green-800">upload file</Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <section className="my-5">
//           <div className="w-10/12 mx-auto">
//             <div className="">
//               <div className="shadow-md rounded overflow-x-auto">
//                 <Table fields={this.state.fields} list={this.state.candidates} query={this.state.query}></Table>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

export default Home