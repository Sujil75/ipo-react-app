import React from 'react'
import {Link} from 'react-router-dom'
import {IpoData} from './Data'

const IpoListContent = () => {
  return (
    <div className='ipo-list-container'>
        <ul className='ipo-items-container'>
            {IpoData.map(item => (
                <>
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

                    <li className='ipo-sm-list'>
                        <div className='company-content-container'>
                            <img src={item.logo} alt='company logo' className='company-logo' />
                            <div className='company-name-container'>
                                <h3>{item.company}</h3>
                                <p>{item.dates}</p>
                            </div>
                        </div>

                        <div>
                            <div className='ipo-data-container'>
                                <div>
                                    <h5>Issue Size</h5>
                                    <h4>{item.issueSize}</h4>
                                </div>

                                <div>
                                    <h5>Price Band</h5>
                                    <h4>{item.priceBand}</h4>
                                </div>

                                <div>
                                    <h5>Min invest/qty</h5>
                                    <h3>{item.investment}</h3>
                                    <p>{item.sharesLots}</p>
                                </div>
                            </div>

                            <Link to={`/ipos/${item.id}`} className='sm-view-details'>View Details</Link>
                        </div>
                    </li>
                </>
            ))}
        </ul>
    </div>
  )
}

export default IpoListContent