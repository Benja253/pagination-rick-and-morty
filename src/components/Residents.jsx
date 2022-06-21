import React from 'react'
import useResident from '../hooks/useResident'

const Residents = ({url}) => {

  const resident = useResident(url)

  return (
    <article className='card'>
      <img src={resident?.image} alt="" />
      <h2>{resident?.name}</h2>
      <p>Gender: {resident?.gender}</p>
    </article>
  )
}

export default Residents