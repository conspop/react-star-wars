import React from 'react'
import { Link } from 'react-router-dom'

function StarshipPage(props) {
  const starship = props.location.state
  return (
    <>
      <div className='StarshipPage'>
        {starship ?
          <div>
            <div>Name: {starship.name}</div>
            <div>Model: {starship.model}</div>
          </div> 
          :
          <h3>Loading...</h3>
        }
      </div>
      <div><Link to='/'>Return</Link></div>
    </>
  )
}

export default StarshipPage