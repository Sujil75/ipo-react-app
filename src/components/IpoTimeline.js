import React from 'react'
import {Chrono} from 'react-chrono'
import "react-chrono/dist/style.css";

const IpoTimeline = props => {
    const data = props.data
    
    const items = data.map(item => ({
        title: (
            <div className='timeline-container'>
                <h5>{item.stage}</h5>
                <p>{item.date}</p>
            </div>
        )
    }))

    return (
        <div className='ipo-timeline-container'>
            <h4>IPO Timeline</h4>
            
            <ul style={{ width: "100%", height: "350px" }}>
                <Chrono
                    mode="HORIZONTAL"
                    items={items}
                    cardLess={true}           
                    hideControls={true}       
                    disableToolbar={true}     
                    lineWidth={1}             
                    timelinePointDimension={20} 
                    theme={{
                        primary: "green",     
                        secondary: "#e0e0e0", 
                        titleColor: "black",  
                        cardTitleColor: "green" 
                    }}
                />
            </ul>
        </div>
    )
}

export default IpoTimeline