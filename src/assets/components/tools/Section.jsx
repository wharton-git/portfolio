import React from 'react'

const Section = ({ children }) => {
    return (
        <div className={`neu-protrude dark:neu-protrude w-full flex items-center p-5`}>
            {children}
        </div>
    )
}

export default Section