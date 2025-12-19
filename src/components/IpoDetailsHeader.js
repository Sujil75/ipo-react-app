import React from 'react'
import { FaAngleLeft } from "react-icons/fa6"
import { TbFileDownload } from "react-icons/tb"
import {useNavigate} from 'react-router-dom'

const IpoDetailsHeader = props => {
    const data = props.data
    const navigate = useNavigate()

  return (
    <div className='details-view-header'>
        <div className='details-view-company-content-container'>
            <button type="button" onClick={() => navigate('/')} className='details-view-arrow-button'>
                <FaAngleLeft size="20" />
            </button>

            <div className='details-view-company-name-container'>
                <img src={data.logo} alt="company logo" className='company-logo' />

                <div className='company-name-container'>
                    <h3>{data.company}</h3>
                    <p>{data.companyLegalName}</p>
                </div>
            </div>
        </div>

        <div className='details-view-header-btn-container'>
            <div>
                <TbFileDownload size="40" />
            </div>
            
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default IpoDetailsHeader