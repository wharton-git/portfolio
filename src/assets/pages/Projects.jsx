import React from 'react'
import Box from '../components/tools/Box'
import Card from '../components/tools/Card'
import portfolio from "./../images/portfolio.png"
import roMax from "./../images/ro-whart.png"
import roGantt from "./../images/ro-tat.png"
import rmarket from "./../images/rmarket.png"
import unknown from "./../images/unknown.png"
import newImg from "./../images/new.png"

const Projects = () => {
    return (
        <Box>
            <div className="p-2 neu-sm dark:neu-dark-sm grid grid-cols-4 gap-5">
                <Card title={"Portfolio"} image={portfolio} children={"My Portfolio website"} badge1={"React"} badge2={"daisyUI"} />
                <Card title={"RO Max Flow"} image={roMax} children={"OR Ford Fulkerson's algorithm."} badge1={"React"} badge2={"Python"} />
                <Card title={"RO GANTT"} image={roGantt} children={"OR Task scheduling."} badge1={"React"} badge2={"Python"} />
                <Card title={"Url-video-detector"} image={unknown} children={"Extension to download video"} badge1={"JS"} badge2={"Go"} />
                <Card title={"R-Market"} image={rmarket} children={"E-commerce site."} badge1={"Laravel"} badge2={"React"} />
                <Card title={"What's New ?"} image={newImg} children={"Stay tuned..."} />
            </div>
            <div className='absolute bottom-5 right-5'>
                <div role="alert" className="alert alert-error alert-soft">
                    <span>Error! The links are not working yet, they will be available soon.</span>
                </div>
            </div>
        </Box>
    )
}

export default Projects