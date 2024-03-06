import React, { Component } from 'react'
import loader from './loader.gif'
export default class Loader extends Component {
  render() {
    return (
      <div className='my-3 d-flex justify-content-center'>
        <img src={loader} height={50} alt='/'></img>
      </div>
    )
  }
}
