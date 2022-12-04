import React, { useContext, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import {GrFormPreviousLink} from 'react-icons/gr'
import Brand from './Brand'
import Download from './Download'
import LazyLoad from 'react-lazyload'
import MainContext from '../MainContext'
import Loader from './Loader'


const Collection = () => {


    const {slugs} = useParams()
    console.log(slugs)

    const {setSelectedBrands, selectedBrands, brands} = useContext(MainContext)

    useEffect(()=>{
     setSelectedBrands(slugs.split(","))
    },[slugs])

    const clearSelectedBrands = () =>{
          setSelectedBrands([])
    }
  return (
    <div className='content'>
     <header className='header'>

     <Link to="/" onClick={clearSelectedBrands} className="back">
     <GrFormPreviousLink className='back-icon'/>
      <button className='back-btn'>All Brands</button>
    </Link>


            {selectedBrands.length === 0 ? "" : <Download />}
       </header>
       <main className='brands'>
         {selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)

            return (
                <LazyLoad once={true} placeholder={<Loader />} overflow={false}>
                <Brand brand={brand} />
              </LazyLoad>
            )
 
         }
         
       ) }
       </main>
      
    </div>
  )
}

export default Collection
