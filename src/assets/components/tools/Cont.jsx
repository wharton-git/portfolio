import React from 'react'

const Cont = ({ children, icon }) => {
    return (
        <div className={`neu-protrude dark:neu-protrude w-max flex items-center justify-center gap-2 p-2`}>
            {icon}{children}
        </div>
    )
}

export default Cont