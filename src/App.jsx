import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useLocation from './hooks/useLocation'
import Residents from './components/Residents'
import InputSearch from './components/InputSearch'
import Pagination from './components/Pagination'

function App() {

  const [inputSearch, setInputSearch] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const location = useLocation(inputSearch)

  let arrayResidents = []
  const residentPerPage = 6
  if(location?.residents.length < residentPerPage){
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage) // 11 = cantidad paginas máximas
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
  // Analiza si estamos en el último(true) o no(false)
  if(currentBlock * pagesPerBlock >= quantityPages){
    // Cuando es el último bloque
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
      arrayPages.push(i)
    }
  } else {
    // cuando no es el último bloque
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
      arrayPages.push(i)
    }
  }

  return (
    <div className="App">
      <h1>#{location?.id}</h1>
      <InputSearch
        setInputSearch={setInputSearch}
      />
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <div className='card-container'>
        {
          arrayResidents?.map(url => (
            <Residents 
              key={url}
              url={url}
            />
          ))
        }
      </div>
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    </div>
  )
}

export default App
