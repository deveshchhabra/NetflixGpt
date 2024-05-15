import React from 'react'
import Header from './Header'
import Form from './Form'
import { BACK_GROUND} from '../utils/constant'

const login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={BACK_GROUND}
        //
        alt='bg'/>
      </div>
      <Form/>
      
    </div> )}
export default login


