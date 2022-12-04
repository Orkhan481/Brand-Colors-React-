
import Brand from './Brand'
import Search from './Search'
import { useContext } from 'react'
import MainContext from '../MainContext'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import Loader from './Loader'

const Content = () => {
   const {brands,selectedBrands} = useContext(MainContext)
  return (
    <div className='content'>
       <header className='header'>
            <Search />
            {selectedBrands.length === 0 ? "" : <Download />}
       </header>
       <main className='brands'>
         {brands.map(brand =>(
           <LazyLoad once={true} placeholder={<Loader />} overflow={false}>
           <Brand brand={brand} />
         </LazyLoad>
         ))}
       </main>
    </div>
  )
}

export default Content