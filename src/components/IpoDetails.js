import React from 'react'

const IpoDetails = props => {
    const data = props.data

    return (
        <div className='ipo-details-container'>
            <h4>IPO Details</h4>

            <ul>
                <li>
                    <p>Issue size</p>
                    <h4>{data.issueSize}</h4>
                </li>

                <li>
                    <p>Price range</p>
                    <h4>{data.priceRange}</h4>
                </li>
                
                <li>
                    <p>Minimum Amount</p>
                    <h4>{data.minimumAmount}</h4>
                </li>

                <li>
                    <p>Lot size</p>
                    <h4>{data.lotSize}</h4>
                </li>

                <li>
                    <p>Issue Dates</p>
                    <h4>{data.issueDates}</h4>
                </li>

                <li>
                    <p>Listed on</p>
                    <h4>{data.listedOn}</h4>
                </li>

                <li>
                    <p>Listed Price</p>
                    <h4>{data.listedPrice}</h4>
                </li>

                <li>
                    <p>Listing gains</p>
                    <h4>{data.listingGains}</h4>
                </li>
            </ul>
        </div>
    )
}

export default IpoDetails