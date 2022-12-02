import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-800 text-white'>
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between py-4">
                <a href="">Home</a>
                <ul className='flex space-x-4'>
                    <li>Users</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar