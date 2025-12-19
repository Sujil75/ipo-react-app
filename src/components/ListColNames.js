import React from 'react'
import {IPOColNames} from './Data'

const ListColNames = () => {
  return (
    <div className='col-names-container'>
        <ul className='col-contents-container'>
            {IPOColNames.map(eachItem => <li key={eachItem.id}>{eachItem.item}</li>)}
        </ul>
    </div>
  )
}

export default ListColNames