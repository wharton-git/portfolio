import React from 'react'
import Box from '../components/tools/Box'
import Card from '../components/tools/Card'
import portfolio from "./../images/portfolio.png"
import roMax from "./../images/ro-whart.png"
import roGantt from "./../images/ro-tat.png"
import rmarket from "./../images/rmarket.png"

const Projects = () => {
    return (
        <Box>
            <div className="p-2 neu-sm dark:neu-dark-sm grid grid-cols-4 gap-5">
                <Card title={"Portfolio"} image={portfolio} children={"My Portfolio website"}/>
                <Card title={"RO Max Flow"} image={roMax} children={"OR Ford Fulkerson's algorithm."}/>
                <Card title={"RO GANTT"} image={roGantt} children={"OR Task scheduling."}/>
                <Card title={"Url-video-detector"} image={roGantt} children={"Extension to download video"}/>
                <Card title={"R-Market"} image={rmarket} children={"E-commerce site."}/>
            </div>
        </Box>
    )
}

export default Projects