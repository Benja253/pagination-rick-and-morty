import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useResident = url => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))

  }, [])
  

  return resident
}

export default useResident