import React, { Component } from 'react'
import Navbar from '../components/parts/Navbar'
import Table from '../components/ui/Table'
import fields from '../utils/fields'
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="my-5">
            <div className="w-10/12 mx-auto">
                <div className="flex justify-between">
                    <div className="border rounded flex-[2]">
                        <input type="search" className='h-full focus:outline-none py-2 px-4 w-full' />
                    </div>
                    <div className="space-x-5 flex-[1] flex justify-end">
                        <button className='bg-red-500 rounded py-2 px-4 text-white uppercase hover:bg-red-800'>clear table</button>
                        <a href="" className="bg-green-500 rounded py-2 px-4 text-white uppercase hover:bg-green-800">upload file</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="my-5">
          <div className="w-10/12 mx-auto">
            <div className="">
              <div className="shadow-md rounded overflow-x-auto">
                <Table fields={fields.candidateFields} list={fields.fakeCandidateArray}></Table>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home