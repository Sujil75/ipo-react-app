import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { LoremIpsum } from 'react-lorem-ipsum'

import {IpoDetailItems} from './Data'
import IpoDetailsHeader from './IpoDetailsHeader'
import IpoDetails from './IpoDetails'
import IpoTimeline from './IpoTimeline'

const IpoDetailView = () => {
    const id = useParams().id

    const data = IpoDetailItems.find(item => item.id === id)

    if(!data) {
        return <p>No Value Found!</p>
    }

    return (
        <div className='detail-view-container'>
            <div className='pages-container'>
                <Link to="/" className='home-link'>Home</Link>
                <p>{'>'}</p>
                <p>Market Watch</p>
            </div>

            <div className='details-view-content-container'>
                <IpoDetailsHeader data={data} />

                <IpoDetails data={data.ipoDetails} />

                <IpoTimeline data={data.ipoTimeline} />

                <div className='about-company'>
                    <h4>About the company</h4>

                    <LoremIpsum p={1} avgSentencesPerParagraph={20} />
                    <br />
                    <LoremIpsum p={1} avgSentencesPerParagraph={30} />
                </div>
            </div>
        </div>
    )
}

export default IpoDetailView