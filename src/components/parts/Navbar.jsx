import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-blue-800 text-white'>
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between py-4">
                <Link to="/candidates">Home</Link>
                <ul className='flex space-x-4'>
                    <li>Users</li>
                    <li title="logout" className="cursor-pointer">
                      <FontAwesomeIcon icon={faPowerOff} />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar