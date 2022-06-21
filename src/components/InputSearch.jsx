import React from 'react'

const InputSearch = ({setInputSearch}) => {

  const submit = e => {
    e.preventDefault()
    setInputSearch(e.target.firstChild.value)
  }

  return (
    <form className='form' onSubmit={submit}>
      <input type="text" />
      <button>Search Location</button>
    </form>
  )
}

export default InputSearch