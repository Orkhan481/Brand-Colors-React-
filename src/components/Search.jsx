import React, { useContext } from 'react'
import {GrSearch} from 'react-icons/gr'
import MainContext from '../MainContext'


const Search = () => {

  const {search, setSearch} = useContext(MainContext)
  return (
    <div className='search'>
      <div className="icon">
      <GrSearch />
      </div>
        <input type="text" onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search Brand'/>
    </div>
  )
}

export default Search