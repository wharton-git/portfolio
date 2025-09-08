// SK.jsx
import React from 'react'

const SK = ({ image, title, color }) => {
    return (
        <div className="tooltip" data-tip={title}>
            <div className="neu-protrude dark:neu-protrude w-max flex-col items-center m-0 p-0">
                <div
                    className="p-2 bg-transparent rounded-md transition duration-300 ease-in-out"
                    
                    onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = `2px 2px 5px ${color}, -2px -2px 5px ${color}`
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = `2px 2px 5px transparent, -2px -2px 5px transparent`
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-20 h-20 object-contain rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default SK
