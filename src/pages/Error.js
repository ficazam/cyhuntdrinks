import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
      <h1 className='section-title'>Hmmm... Something went wrong here.</h1>
      <Link to='/' className='btn btn-primary'>homepage</Link>
      </div>
    </section>
  )
}