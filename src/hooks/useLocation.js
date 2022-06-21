import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useLocation = locationParam => {

  const [location, setlocation] = useState()

  let locationNumber

  if(locationParam) {
    locationNumber = locationParam
  } else {
    locationNumber = Math.ceil(Math.random() * 126)
  }

  const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

  useEffect(() => {
    axios.get(URL)
      .then(res => setlocation(res.data))
      .catch(err => console.log(err))
  
  }, [locationParam])
  

  return location
}

export default useLocation