import React from 'react'
import {Link} from 'react-router-dom'
import {IpoData} from './Data'

const IpoListContent = () => {
  return (
    <div className='ipo-list-container'>
        <ul className='ipo-items-container'>
            {IpoData.map(item => (
                <Link key={item.id} to={`/ipos/${item.id}`} className='list-link' >
                    <li className='ipo-list'>
                        <div className='company-content-container'>
                            <img src={item.logo} alt='company logo' className='company-logo' />
                            <div className='company-name-container'>
                                <h3>{item.company}</h3>
                                <p>{item.dates}</p>
                            </div>
                        </div>

                        <h3 className='issue-size'>{item.issueSize}</h3>

                        <h3 className='ipo-price-band'>{item.priceBand}</h3>

                        <div className='ipo-shares-container'>
                            <h3>{item.investment}</h3>
                            <p>{item.sharesLots}</p>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default IpoListContent